import { GenreIcon, IconBook, CalendarIcon, FavoriteIcon } from '../helper/icons'
import { useState } from 'react'
import GameNotImage from '../components/GameNotImage'
import { useGame } from '../context/gamesContext'

export default function GameInfoCard({ game, hasImage, isInFavorites, id }) {
    const [localLoading, setLocalLoading] = useState(false)
    const { getSummary } = useGame()

    // handleSummary
    const handleSummary = async () => {
        setLocalLoading(true)
        await getSummary(id)
        setLocalLoading(false)
    }

    return (
        <>
            <div className="w-full rounded-xl bg-card border-arcadia flex items-center p-4 box-border">
                <div className="w-full h-full rounded-lg bg-[#FCCE9F] border-arcadia overflow-hidden">
                    {hasImage ? (
                        <img
                            src={game.background_image}
                            alt={game.name}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <GameNotImage />
                    )}
                </div>
            </div>

            {/* game info */}
            <div className="w-full rounded-xl bg-card border-arcadia box-border flex flex-col justify-center p-5 gap-3">

                {/* title */}
                <h2 className="font-semibold text-arcadia text-xl">{game.name}</h2>

                {/* released date */}
                <div className="w-full bg-[#ECC799] p-2 rounded-full text-arcadia flex items-center gap-2">
                    <span className="bg-[#DB8E6B]/70 w-8 h-8 rounded-full aspect-square flex justify-center items-center">
                        <CalendarIcon />
                    </span>
                    <p className="text-arcadia text-sm">Released date: {game.released}</p>
                </div>

                {/* genres */}
                <div className="w-full bg-[#ECC799] p-2 rounded-full text-arcadia flex items-center gap-2">
                    <span className="bg-[#DB8E6B]/70 w-8 h-8 rounded-full aspect-square flex justify-center items-center">
                        <GenreIcon />
                    </span>
                    <p className="text-arcadia text-sm">
                        Genres: {game.genres?.join(', ') || 'N/A'}
                    </p>
                </div>

                {/* isInFavorites? */}
                <div className="w-full bg-[#ECC799] p-2 rounded-full text-arcadia flex items-center gap-2">
                    <span className="bg-[#DB8E6B]/70 w-8 h-8 rounded-full aspect-square flex justify-center items-center">
                        <FavoriteIcon />
                    </span>
                    <p className="text-arcadia text-sm">
                        In favorites?: {isInFavorites ? 'already in favs' : 'not added'}
                    </p>
                </div>

                {/* platforms */}
                <div className="w-full mb-4">
                    <div className="flex flex-wrap gap-1 mt-1">
                        {game.platforms.map((plat, idx) => (
                            <span
                                key={idx}
                                className="bg-[#ECC799] text-arcadia px-2 py-0.5 rounded-full text-xs"
                            >
                                {plat}
                            </span>
                        ))}
                    </div>
                </div>

                <button
                    onClick={handleSummary}
                    className="w-full px-4 py-2 uppercase text-sm text-white 
                    cursor-pointer bg-[#FF6108] hover:bg-[#e45507] transition-colors 
                    rounded-full flex gap-2 items-center"
                >
                    <span><IconBook /></span>
                    {localLoading ? 'generating...' : 'generated ai description'}
                </button>
            </div>
        </>
    )
}
