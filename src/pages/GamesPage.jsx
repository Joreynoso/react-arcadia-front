// imports
import ErrorCard from '../components/ErrorCard'
import LoadingCard from '../components/LoadingCard'
import ModalMessage from "../components/ModalMessage"
import GameToast from "../components/GameToast"
import GameListComponent from '../components/GameListComponent'
import ModalConfirm from "../components/ModalConfirm"
import PaginationComponent from '../components/PaginationComponent'

import { useGame } from '../context/gamesContext'
import { useState } from 'react'
import { useFavorite } from '../context/favoriteContext'

export default function GamesPage() {
    const { modalOpen, setModalOpen, modalMessage, removeFavorite } = useFavorite()
    const [confirmOpen, setConfirmOpen] = useState(false)
    const {
        page,
        setPage,
        totalPages,
        loading,
        error,
        openToast,
        setOpenToast,
        messageToast }
        = useGame()

    // modal state
    const [selectedGame, setSelectedGame] = useState(null)

    // abrir modal desde un GameCard
    const handleDeleteClick = (game) => {
        setSelectedGame(game)
        setConfirmOpen(true)
    }

    // confirmar borrado
    const handleConfirmDelete = async () => {
        if (!selectedGame) return
        try {
            await removeFavorite(selectedGame._id)
        } finally {
            setModalOpen(false)
            setSelectedGame(null)
        }
    }

    // render return
    return (
        <div className="w-full max-w-7xl h-full flex flex-col justify-center items-center flex-1 mt-10 mb-10 mx-auto px-4 sm:px-6 lg:px-10 py-4">
            <h3 className="uppercase text-2xl md:text-3xl lg:text-4xl sm:max-w-2xl max-w-lg leading-snug mb-10 text-white text-center">
                Explora +500 de <br />
                <span className='color-arcadia'>aventuras únicas.</span>
            </h3>

            {error && <ErrorCard />}

            {loading ? <LoadingCard /> : (<GameListComponent onDelete={handleDeleteClick} />

            )}

            {/* paginacion */}
            <PaginationComponent
                page={page}
                totalPages={totalPages}
                setPage={setPage} />

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
