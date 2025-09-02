import { useState } from "react"
import { useSearchParams } from "react-router-dom"

export default function SearchBar() {
    const [searchQuery, setSearchQuery] = useState("")
    const [searchParams, setSearchParams] = useSearchParams()

    // handle UI toggle
    const [activeSort, setActiveSort] = useState(null) // 'desc' o 'asc'

    // handle search submit
    const handleSearch = (e) => {
        e.preventDefault()
        setSearchParams({ q: searchQuery, page: 1 })
    }

    const searchIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 
                5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
    )

    return (
        <div className="w-full max-w-6xl mb-6 mx-auto flex flex-col sm:flex-row gap-4">
            {/* searchbar */}
            <form
                onSubmit={handleSearch}
                className="bg-card rounded-full px-3 py-2 text-sm w-full sm:w-1/2 flex items-center gap-2"
            >
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full text-arcadia font-bold px-3 py-2 rounded-full focus:outline-none"
                    placeholder="Type a game name to search.."
                />
                <button
                    type="submit"
                    className="h-9 w-9 rounded-full aspect-square flex items-center justify-center text-white 
                    cursor-pointer bg-[#FF6108] hover:bg-[#e45507] transition-colors"
                >
                    {searchIcon}
                </button>
            </form>

            {/* buttons */}
            <div className="w-full sm:w-1/2 flex sm:flex-row gap-2">
                <button
                    onClick={() => {
                        setSearchParams({ page: 1, sort: "desc" })
                        setActiveSort("desc")
                    }}
                    className={`
                        w-full flex-1 min-h-[38px] text-xs sm:text-sm uppercase color-arcadia 
                        borde-arcadia rounded-full px-3 py-2 cursor-pointer bg-[#FF6108] hover:bg-[#e45507] transition-colors
                        ${activeSort === "desc" ? "shadow-inner shadow-black/70" : ""}
                    `}
                >
                    newest
                </button>
                <button
                    onClick={() => {
                        setSearchParams({ page: 1, sort: "asc" })
                        setActiveSort("asc")
                    }}
                    className={`
                        w-full flex-1 min-h-[38px] text-xs sm:text-sm uppercase color-arcadia 
                        borde-arcadia rounded-full px-3 py-2 cursor-pointer bg-[#FF6108] hover:bg-[#e45507] transition-colors
                        ${activeSort === "asc" ? "shadow-inner shadow-black/70" : ""}
                    `}
                >
                    oldest
                </button>
                <button
                    onClick={() => {
                        setSearchQuery("")
                        setSearchParams({})
                        setActiveSort(null)
                    }}
                    className="w-full flex-1 min-h-[38px] text-xs sm:text-sm uppercase color-arcadia 
                    borde-arcadia rounded-full px-3 py-2 cursor-pointer border border-white/60"
                >
                    clear
                </button>
            </div>
        </div>
    )
}
