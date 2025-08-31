//imports
import { useParams } from "react-router-dom"
import { useGame } from '../context/gamesContext'
import { useState, useEffect } from 'react'
import LoadingCard from '../components/LoadingCard'

export default function GameDetail() {
    const [game, setGame] = useState(null)
    const { id } = useParams()
    const { error, getGameById, loading } = useGame()

    useEffect(() => {
        const fetchGame = async () => {
            const data = await getGameById(id)
            if (data) setGame(data)
        }
        fetchGame()
    }, [id])

    if (loading) return <LoadingCard />
    if (error) return <p className='text-white text-lg'>{error}</p>
    if (!game) return <p className="text-white text-lg">Game not found</p>

    return (
        <div className="w-full h-full flex flex-col justify-center items-center flex-1 mt-20 mb-20">
            <h3 className="uppercase text-2xl md:text-3xl lg:text-4xl sm:max-w-2xl max-w-lg leading-snug mb-10 text-white text-center">
                Game detail of <span className='color-arcadia'>Video game name</span>

                <p className='text-white text-lg'>{game.name}</p>
                <p className='text-white text-lg'>{game.genres}</p>
                <p className='text-white text-lg'>{game.platforms}</p>
                <p className='text-white text-lg'>{game.released}</p>
            </h3>
        </div>
    )
}
