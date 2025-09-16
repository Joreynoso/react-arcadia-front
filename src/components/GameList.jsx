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
    const { error, loading, games, getAllGames, searchGames, searchByDate, deleteGame, searchByGenre } = useGame()
    const [searchParams, setSearchParams] = useSearchParams()
    const [totalPages, setTotalPages] = useState()
    const genre = searchParams.get('genre') || ''

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
            if (query) {
                await searchGames(query, page, limit)
            } else if (sort) {
                await searchByDate(page, limit, sort)
            } else if (genre) {          // <-- agregamos este caso
                await searchByGenre(page, limit, genre)
            } else {
                await getAllGames(page, limit)
            }

            if (data?.totalPages) setTotalPages(data.totalPages)
        }

        fetchGames()
    }, [page, query, sort, genre])

    // paginación
    // ir a la página anterior (si no es la primera)
    const handlePrev = () => {
        if (page > 1) setSearchParams({ q: query, sort, genre, page: page - 1 })
    }

    const handleNext = () => {
        setSearchParams({ q: query, sort, genre, page: page + 1 })
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
