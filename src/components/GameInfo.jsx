import { useParams } from "react-router-dom"
import { useGame } from '../context/gamesContext'
import { useState, useEffect } from 'react'
import { useFavorite } from "../context/favoriteContext"

import LoadingCard from '../components/LoadingCard'
import ModalSummary from '../components/ModalSummary'
import GameInfoCard from "./GameInfoCard"

export default function GameDetail() {
    const [game, setGame] = useState(null)
    const { favorites } = useFavorite()
    const { id } = useParams()
    const { error, getGameById, summary, modalOpen, setModalOpen } = useGame()

    useEffect(() => {
        const fetchGame = async () => {
            const data = await getGameById(id)
            if (data) setGame(data)
        }
        fetchGame()
    }, [id])

    if (!game) return <LoadingCard />
    if (error) return <p className='text-white text-lg'>{error}</p>

    const hasImage = !!game.background_image
    const isInFavorites = favorites.some(fav => fav.id === game._id)

    return (
        <>
            <div className="w-full max-w-7xl flex flex-col sm:flex-row gap-4 mb-10">
                <GameInfoCard
                    game={game}
                    hasImage={hasImage}
                    isInFavorites={isInFavorites}
                    id={id}
                />
            </div>

            {modalOpen && (
                <ModalSummary
                    open={modalOpen}
                    message={summary}
                    onClose={() => setModalOpen(false)}
                />
            )}
        </>
    )
}
