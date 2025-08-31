// imports
import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useGame } from '../context/gamesContext'
import GameCard from './GameCard'

export default function GameList() {
    const { error, loading, games, getAllGames } = useGame()
    const [totalPages, setTotalPages] = useState()
    const [searchParams, setSearchParams] = useSearchParams()
    const limit = 20

    const page = parseInt(searchParams.get('page')) || 1

    useEffect(() => {
        const fetchGames = async () => {
            const data = await getAllGames(page, limit)

            console.log('-->[DATA FROM CONTEXT]', data)
            if (data?.totalPages) {
                setTotalPages(data.totalPages)
            }
        }
        fetchGames()
    }, [page])

    const handlePrev = () => setSearchParams({ page: Math.max(page - 1, 1) })
    const handleNext = () => setSearchParams({ page: page + 1 })

    if (loading) return <p className='text-white text-lg'>Loading games..</p>
    if (error) return <p className='text-white text-lg'>{error}</p>

    const mappedListGames = games?.map(game => (
        <Link
            className='transition-transform duration-300 ease-in-out 
            hover:-translate-y-2'
            key={game._id}
            to={`/games/${game._id}`}>
            <GameCard
                id={game._id}
                name={game.name}
                released={game.released}
                background_image={game.background_image} />
        </Link>
    ))

    const arrowIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
    )

    return (
        <>
            {/* gameList */}
            <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-6xl mb-10">
                {mappedListGames}
            </div>

            {/* navigation */}
            <div className='w-full flex justify-center items-center gap-2'>
                {/* previous page */}
                <button
                    onClick={handlePrev}
                    disabled={page <= 1}
                    className='cursor-pointer h-10 w-10 rounded-full bg-[#FF6108] flex justify-center items-center 
                    text-white transform scale-x-[-1] disabled:bg-gray-400'>
                    {arrowIcon}
                </button>

                {/* current page */}
                <span className='text-white font-semibold'>{page}</span>

                {/* net page */}
                <button
                    disabled={page === totalPages}
                    onClick={handleNext}
                    className='cursor-pointer h-10 w-10 rounded-full bg-[#FF6108] flex justify-center items-center 
                    text-white disabled:bg-gray-400'>
                    {arrowIcon}
                </button>
            </div>
        </>
    )
}
