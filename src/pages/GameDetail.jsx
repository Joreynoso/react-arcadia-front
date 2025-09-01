//imports
import { useParams } from "react-router-dom"
import { useGame } from '../context/gamesContext'
import { useState, useEffect } from 'react'
import LoadingCard from '../components/LoadingCard'
import GoBackButton from '../components/GoBackButton'

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

    if (!game) return <LoadingCard />
    if (error) return <p className='text-white text-lg'>{error}</p>

    return (
        <>
            <div className="relative w-full flex flex-col items-center mt-10 mb-10 gap-4">
                <h3 className="uppercase text-2xl md:text-3xl lg:text-4xl sm:max-w-2xl max-w-lg leading-snug text-white text-center mb-10">
                    Detail game <br /> <span className='color-arcadia'>{game.name}</span>
                </h3>

                <GoBackButton />
            </div>
        </>
    )
}
