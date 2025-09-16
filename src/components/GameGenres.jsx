import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function GameGenres() {
    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get('q') || ''
    const sort = searchParams.get('sort') || ''
    const currentGenre = searchParams.get('genre') || ''
    const genres = ['RPG', 'Action', 'Role', 'Adventure', 'Platformer']

    return (
        <div className="w-full mb-6 mx-auto flex flex-col sm:flex-row gap-4">
            <div className="w-full flex flex-col sm:flex-row gap-2">
                {genres.map(genre => (
                    <button
                        key={genre}
                        className={`
              flex-1 min-h-[38px] text-xs sm:text-sm uppercase color-arcadia
              rounded-full px-3 py-2 cursor-pointer
              bg-[#FF6108] hover:bg-[#e45507] transition-colors
              ${currentGenre === genre ? "shadow-inner shadow-black/70" : ""}
            `}
                        onClick={() => setSearchParams({ q: query, sort, genre, page: 1 })}
                    >
                        {genre}
                    </button>
                ))}
            </div>
        </div>
    )
}
