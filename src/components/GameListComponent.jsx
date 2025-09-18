// imports
import { useGame } from "../context/gamesContext"
import { useState } from "react"
import GameCard from "./GameCard"

export default function GameListComponent({ onDelete }) {
    const { games, genres, platforms } = useGame()
    const [openGenres, setOpenGenres] = useState(false)
    const [openPlatform, setOpenPlatform] = useState(false)

    function toggleOpenGenres() {
        setOpenPlatform(false)
        setOpenGenres(prev => !prev)
    }

    function toggleOpenPlatforms() {
        setOpenGenres(false)
        setOpenPlatform(prev => !prev)
    }

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

    const searchIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 
                5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
    )

    // render return
    return (
        <>
            <div className="w-full flex flex-col sm:flex-row gap-2">
                <div className='w-full sm:w-1/2'>
                    {/* searchbar */}
                    <div className="w-full mx-auto flex flex-col">
                        <div className="bg-card px-2 py-2 rounded-lg text-sm w-full flex items-center gap-2 border-arcadia">
                            <input
                                type="text"
                                className="w-full text-arcadia font-bold px-2 py-2 rounded-lg focus:outline-none placeholder:italic"
                                placeholder="Busca tu juego favorito.."
                            />
                            <div className="h-9 w-9 rounded-md flex items-center justify-center text-white bg-[#FF6108]">
                                {searchIcon}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full sm:w-1/2 flex justify-start items-center gap-2'>
                    {/* dropdown menu platform */}
                    <div className="relative w-40 mb-4 flex-1">
                        {/* Botón */}
                        <button
                            onClick={toggleOpenPlatforms}
                            className="text-xs sm:text-sm lg:text-base flex justify-center items-center gap-2 bg-card 
                             border-arcadia text-arcadia cursor-pointer px-2 py-2 rounded-lg
                            mb-2 w-full h-[56px]"
                        >
                            plataformas
                            {openPlatform ? arrowUpIcon : arrowDownIcon}
                        </button>

                        {/* Dropdown */}
                        {openPlatform && (
                            <div className="absolute top-full left-0 mt-1 w-full bg-card border border-arcadia rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto scrollbar-arcadia">
                                {platforms.map((plat) => (
                                    <button
                                        key={plat}
                                        className="text-xs sm:text-sm
                w-full text-left px-4 py-2 hover:bg-arcadia text-arcadia cursor-pointer
                hover:bg-[#f1cea6] transition-colors duration-100 ease-in-out"
                                    >
                                        {plat}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* dropdown menu genres */}
                    <div className="relative w-40 mb-4 flex-1">
                        {/* Botón */}
                        <button
                            onClick={toggleOpenGenres}
                            className="text-xs sm:text-sm lg:text-base flex justify-center items-center gap-2 bg-card 
                             border-arcadia text-arcadia cursor-pointer px-2 py-2 rounded-lg
                            mb-2 w-full h-[56px]"
                        >
                            generos
                            {openGenres ? arrowUpIcon : arrowDownIcon}
                        </button>

                        {/* Dropdown */}
                        {openGenres && (
                            <div className="absolute top-full left-0 mt-1 w-full bg-card border border-arcadia rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto scrollbar-arcadia">
                                {genres.map((genre) => (
                                    <button
                                        key={genre}
                                        className="text-xs sm:text-sm
                w-full text-left px-4 py-2 hover:bg-arcadia text-arcadia cursor-pointer
                hover:bg-[#f1cea6] transition-colors duration-100 ease-in-out"
                                    >
                                        {genre}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* list game container */}
            <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-4">
                {listGamesMap}
            </div>
        </>
    )

}