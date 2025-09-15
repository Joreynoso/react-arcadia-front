// imports
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useGame } from '../context/gamesContext'

// components
import LoadingCard from './LoadingCard'
import GameCard from './GameCard'
import Pagination from './Pagination'
import ModalConfirm from '../components/ModalConfirm'

export default function GameList() {
    const { error, loading, games, getAllGames, searchGames, searchByDate, deleteGame } = useGame()
    const [searchParams, setSearchParams] = useSearchParams()
    const [totalPages, setTotalPages] = useState()

    // modal state
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedGame, setSelectedGame] = useState(null)

    // abrir modal
    const handleDeleteClick = (game) => {
        setSelectedGame(game)
        setModalOpen(true)
    }

    // confirmar borrado
    const confirmDelete = async () => {
        setModalOpen(false)
        if (!selectedGame) return
        await deleteGame(selectedGame._id)
        setSelectedGame(null)
    }

    // cancelar borrado
    const cancelDelete = () => {
        setModalOpen(false)
        setSelectedGame(null)
    }

    // parámetros de búsqueda/paginación
    const limit = 20
    const page = parseInt(searchParams.get('page')) || 1  // página actual (default 1)
    const query = searchParams.get('q') || '' // texto de búsqueda (default vacío)
    const sort = searchParams.get('sort') || '' // criterio de orden (default vacío)

    // cargar juegos
    useEffect(() => {
        const fetchGames = async () => {
            let data
            // Si hay un query en la URL → buscar juegos por nombre
            if (query) {
                data = await searchGames(query, page, limit)

                // Si no hay query pero hay sort → buscar juegos ordenados por fecha
            } else if (sort) {
                data = await searchByDate(page, limit, sort)

                // Si no hay ni query ni sort → obtener todos los juegos
            } else {
                data = await getAllGames(page, limit)
            }

            // Guardar la cantidad de páginas para la paginación
            if (data?.totalPages) setTotalPages(data.totalPages)
        }

        fetchGames()
    }, [page, query, sort])

    // paginación
    // ir a la página anterior (si no es la primera)
    const handlePrev = () => {
        if (page > 1) setSearchParams({ q: query, sort, page: page - 1 })
    }

    const handleNext = () => {
        setSearchParams({ q: query, sort, page: page + 1 })
    }

    // renderizado condicional
    if (loading) return <LoadingCard />
    if (error) return <p className='text-white text-lg'>{error}</p>

    return (
        <>
            <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-4">
                {games?.map(game => {
                    const hasImage = !!game.background_image
                    return (
                        <div
                            key={game._id}
                            className='transition-transform duration-300 ease-in-out hover:-translate-y-2'
                        >
                            <GameCard
                                id={game._id}
                                name={game.name}
                                released={game.released}
                                background_image={game.background_image}
                                hasImage={hasImage}
                                onDelete={() => handleDeleteClick(game)}
                            />
                        </div>
                    )
                })}
            </div>

            <Pagination
                page={page}
                totalPages={totalPages}
                handleNext={handleNext}
                handlePrev={handlePrev}
            />

            <ModalConfirm
                open={modalOpen}
                onConfirm={confirmDelete}
                onCancel={cancelDelete}
                message={`¿Estás seguro que quieres borrar ${selectedGame?.name}?`}
            />
        </>
    )
}
