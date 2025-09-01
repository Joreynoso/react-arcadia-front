// imports
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useGame } from '../context/gamesContext'

// components
import LoadingCard from './LoadingCard'
import GameCard from './GameCard'
import Pagination from './Pagination'

export default function GameList() {
    const { error, loading, games, getAllGames, searchGames } = useGame()
    const [searchParams, setSearchParams] = useSearchParams()
    const [totalPages, setTotalPages] = useState()

    const limit = 20
    const page = parseInt(searchParams.get('page')) || 1
    const query = searchParams.get('q') || ''

    // load games (búsqueda o todos)
    useEffect(() => {
        const fetchGames = async () => {
            let data
            if (query) {
                data = await searchGames(query, page, limit) // usa endpoint /search
            } else {
                data = await getAllGames(page, limit)
            }
            if (data?.totalPages) {
                setTotalPages(data.totalPages)
            }
        }
        fetchGames()
    }, [page, query])

    // handle pagination
    const handlePrev = () => {
        if (page > 1) {
            setSearchParams({ q: query, page: page - 1 })
        }
    }

    const handleNext = () => {
        setSearchParams({ q: query, page: page + 1 })
    }

    // condicional rendering
    if (loading) return <LoadingCard />
    if (error) return <p className='text-white text-lg'>{error}</p>

    const mappedListGames = games?.map(game => {

        return (
            <div
                key={game._id}
                className='
                transition-transform duration-300 ease-in-out 
                hover:-translate-y-2
            '>
                <GameCard
                    id={game._id}
                    name={game.name}
                    released={game.released}
                    background_image={game.background_image}
                />
            </div >
        )
    })

    return (
        <>
            {/* gameList */}
            <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 max-w-6xl mb-10">
                {mappedListGames}
            </div>

            {/* pagination */}
            <Pagination
                page={page}
                totalPages={totalPages}
                handleNext={handleNext}
                handlePrev={handlePrev} />
        </>
    )
}
