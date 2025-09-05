import { use, useEffect, useState } from "react"
import { useSearchParams, Link } from "react-router-dom"
import { usePermission } from '../hooks/usePermission'

export default function SearchBar() {
    const [searchQuery, setSearchQuery] = useState("")
    const [searchParams, setSearchParams] = useSearchParams()
    const { can } = usePermission()

    // handle UI toggle
    const [activeSort, setActiveSort] = useState(null) // 'desc' o 'asc'

    // sincronizar el input con la URL
    useEffect(() => {
        const q = searchParams.get('q') || ""
        setSearchQuery(q)
    }, [searchParams])

    // handle search submit
    const handleSearch = (e) => {
        e.preventDefault()

        if (!searchQuery.trim()) {
            return // do nothing
        }
        setActiveSort(null) // desactiva los botones de sort
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
        <div className="w-full mb-6 mx-auto flex flex-col sm:flex-row gap-4">
            {/* searchbar */}
            <form
                onSubmit={handleSearch}
                className="bg-card rounded-full px-3 py-2 text-sm w-full sm:w-1/2 flex items-center gap-2"
            >
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full text-arcadia font-bold px-3 py-2 rounded-full focus:outline-none placeholder:italic"
                    placeholder="Busca tu juego favorito..."
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
            <div className="w-full sm:w-2/3 flex sm:flex-row gap-2">
                <button
                    onClick={() => {
                        setSearchQuery("")
                        setSearchParams({ page: 1, sort: "desc" })
                        setActiveSort("desc")
                    }}
                    className={`
                        w-full flex-1 min-h-[38px] text-xs sm:text-sm uppercase color-arcadia 
                        borde-arcadia rounded-full px-3 py-2 cursor-pointer bg-[#FF6108] hover:bg-[#e45507] transition-colors
                        ${activeSort === "desc" ? "shadow-inner shadow-black/70" : ""}
                    `}
                >
                    nuevos
                </button>
                <button
                    onClick={() => {
                        setSearchQuery("")
                        setSearchParams({ page: 1, sort: "asc" })
                        setActiveSort("asc")
                    }}
                    className={`
                        w-full flex-1 min-h-[38px] text-xs sm:text-sm uppercase color-arcadia 
                        borde-arcadia rounded-full px-3 py-2 cursor-pointer bg-[#FF6108] hover:bg-[#e45507] transition-colors
                        ${activeSort === "asc" ? "shadow-inner shadow-black/70" : ""}
                    `}
                >
                    viejos
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
                    limpiar
                </button>

                {/* display only if admin user is logged */}
                {can('adming') && (
                    <Link
                        to={'/games/add'}
                        className="bg-[#DB8E6B] border-arcadia px-4 py-2 rounded-full flex gap-2 text-white uppercase
                    flex-1 justify-center items-center hover:bg-[#b8704f] duration20 transition-colors ease-in-out
                    w-full min-h-[38px] text-xs sm:text-sm text-arcadia font-bold"
                    >
                        crear
                    </Link>
                )}

            </div>
        </div>
    )
}
