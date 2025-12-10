// ===============================
// GamesPage.jsx
// ===============================
// Este componente muestra el listado de juegos con filtros, paginación,
// modales de confirmación y mensajes de estado.
// Los filtros (género, plataforma, orden) actualizan los resultados automáticamente
// al cambiar su valor.
// ===============================

import { useState, useEffect } from 'react'
import { useGame } from '../context/gamesContext'
import { useFavorite } from '../context/favoriteContext'

// Components
import ErrorCard from '../components/ErrorCard'
import LoadingCard from '../components/LoadingCard'
import ModalMessage from "../components/ModalMessage"
import GameToast from "../components/GameToast"
import GameCard from '../components/GameCard'
import ModalConfirm from "../components/ModalConfirm"
import PaginationComponent from '../components/PaginationComponent'

export default function GamesPage() {
    const { modalOpen, setModalOpen, modalMessage } = useFavorite()
    const [confirmOpen, setConfirmOpen] = useState(false)
    const [selectedGame, setSelectedGame] = useState(null)

    const {
        games,
        genres,
        platforms,
        loading,
        error,
        openToast,
        setOpenToast,
        messageToast,
        deleteGame,

        // estados de filtros y paginación
        page,
        setPage,
        totalPages,
        genre,
        setGenre,
        platform,
        setPlatform,
        sort,
        setSort,
        q,
        setQ
    } = useGame()

    // estado local para manejar debounce del buscador
    const [search, setSearch] = useState(q || '')

    // debounce del input de búsqueda
    useEffect(() => {
        const timeout = setTimeout(() => {
            setPage(1)
            setQ(search.trim())
        }, 800)
        return () => clearTimeout(timeout)
    }, [search])

    // confirmar borrado
    const handleConfirmDelete = async () => {
        if (!selectedGame) return
        try {
            await deleteGame(selectedGame._id)
        } finally {
            setConfirmOpen(false)
            setSelectedGame(null)
        }
    }

    return (
        <div className="w-full max-w-7xl h-full flex flex-col justify-center items-center flex-1 mt-10 mb-10 mx-auto px-4 sm:px-6 lg:px-10 py-4">

            {/* título principal */}
            <h3 className="uppercase text-2xl md:text-3xl lg:text-4xl sm:max-w-2xl max-w-lg leading-snug mb-10 text-white text-center">
                Explora +500 de <br />
                <span className='color-arcadia'>aventuras únicas.</span>
            </h3>

            {/* input búsqueda */}
            <input
                type="text"
                placeholder="Buscar juegos..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full flex-1 bg-card rounded-lg border-arcadia text-arcadia px-3 py-2 mb-3"
            />

            {/* filtros */}
            <div className="w-full flex filters gap-2 mb-4 flex-wrap">

                {/* filtro por género */}
                <select
                    className="flex-1 bg-card rounded-lg border-arcadia text-arcadia px-3 py-2"
                    value={genre}
                    onChange={(e) => {
                        setPage(1)
                        setGenre(e.target.value)
                    }}
                >
                    <option value="">Todos los géneros</option>
                    {genres.map(g => (
                        <option key={g} value={g}>{g}</option>
                    ))}
                </select>

                {/* filtro por plataforma */}
                <select
                    className="flex-1 bg-card rounded-lg border-arcadia text-arcadia px-3 py-2"
                    value={platform}
                    onChange={(e) => {
                        setPage(1)
                        setPlatform(e.target.value)
                    }}
                >
                    <option value="">Todas las plataformas</option>
                    {platforms.map(p => (
                        <option key={p} value={p}>{p}</option>
                    ))}
                </select>

                {/* orden */}
                <select
                    className="flex-1 bg-card rounded-lg border-arcadia text-arcadia px-3 py-2"
                    value={sort}
                    onChange={(e) => {
                        setPage(1)
                        setSort(e.target.value)
                    }}
                >
                    <option value="desc">Más recientes</option>
                    <option value="asc">Más antiguos</option>
                </select>

                {/* limpiar filtros */}
                <button
                    onClick={() => {
                        setGenre('')
                        setPlatform('')
                        setSort('desc')
                        setPage(1)
                    }}
                    className="bg-arcadia text-white px-3 py-2 rounded-lg"
                >
                    Limpiar filtros
                </button>
            </div>

            {loading && <LoadingCard />}

            {!loading && games.length > 0 && (
                <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-4">
                    {games.map(game => (
                        <GameCard
                            key={game._id}
                            id={game._id}
                            name={game.name}
                            released={game.released}
                            background_image={game.background_image}
                            hasImage={!!game.background_image}
                            onDelete={() => handleDeleteClick(game)}
                        />
                    ))}
                </div>
            )}

            {!loading && games.length === 0 && error && (
                <ErrorCard message={error} />
            )}

            {/* paginación */}
            <PaginationComponent
                page={page}
                totalPages={totalPages}
                setPage={setPage}
            />

            {/* toastMessage */}
            <GameToast
                open={openToast}
                message={messageToast}
                onClose={() => setOpenToast(false)}
            />

            {/* modal msg */}
            <ModalMessage
                open={modalOpen}
                message={modalMessage}
                onClose={() => setModalOpen(false)}
            />

            {/* modal confirmación de borrado */}
            {selectedGame && (
                <ModalConfirm
                    open={confirmOpen}
                    onConfirm={handleConfirmDelete}
                    onCancel={() => setConfirmOpen(false)}
                    message={`¿Estás seguro que quieres borrar ${selectedGame.name}?`}
                />
            )}
        </div>
    )
}
