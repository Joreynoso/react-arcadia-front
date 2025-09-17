// imports
import { useGame } from "../context/gamesContext"
import { useState } from "react"
import GameCard from "./GameCard"

export default function GameListComponent({ onDelete }) {
    const { games } = useGame()
    const [openPlatform, setOpenPlatform] = useState(false)
    const [sort, setSort] = useState(null)

    const plataformas = [
        'PC',
        'macOS',
        'Linux',
        'Android',
        'iOS',
        'Dreamcast',
        'DreamCast',
        'Nintendo 64',
        'Nintendo DS',
        'Nintendo DSi',
        'Nintendo Switch',
        'Wii',
        'Xbox',
        'Xbox One',
        'Xbox 360',
        'PS Vita',
        'PlayStation',
        'PlayStation 3',
        'PlayStation 2',
        'PlayStation 4',
    ]

    const listGamesMap = games?.map(game => {
        const hasImage = !!game.background_image
        return (
            <GameCard
                key={game.id}
                id={game._id}
                name={game.name}
                released={game.released}
                background_image={game.background_image}
                hasImage={hasImage}
                onDelete={() => onDelete(game)}
            />
        )
    })

    const arrowDownIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-arcadia size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
    )

    const arrowUpIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-arcadia size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
        </svg>
    )

    // render return
    return (
        <>

            <div className="w-full flex justify-end items-center">

                {/* drowpdonw menu platform */}
                <div className="relative w-40 mb-4">
                    {/* Botón */}
                    <button
                        onClick={() => setOpenPlatform(!openPlatform)}
                        className="
                    text-xs sm:text-sm lg:text-base
                    flex justify-center items-center gap-2 bg-card 
                    border-arcadia text-arcadia cursor-pointer px-2 py-2 rounded-lg
                     mb-2 w-full"
                    >
                        plataformas
                        {openPlatform ? arrowUpIcon : arrowDownIcon}
                    </button>

                    {/* Dropdown */}
                    {openPlatform && (
                        <div className="absolute top-full left-0 mt-1 w-full bg-card border border-arcadia rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto scrollbar-arcadia">
                            {plataformas.map((plat) => (
                                <button
                                    key={plat}
                                    className="text-xs sm:text-sm
                                w-full text-left px-4 py-2 hover:bg-arcadia text-arcadia cursor-pointer"
                                >
                                    {plat}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

            </div>

            {/* list game container */}
            <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-4">
                {listGamesMap}
            </div>
        </>
    )

}