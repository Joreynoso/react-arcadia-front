
export default function FavoriteSearch({ searchQuery, setSearchQuery }) {

    // en el componente padre o en FavoriteSearch
    const handleSearchChange = (value, setSearchQuery) => {
        const trimmed = value.trim()
        if (trimmed === "") {
            setSearchQuery("")
            return
        }
        setSearchQuery(trimmed)
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
        <div className="w-full mb-6 mx-auto flex flex-col">
            {/* searchbar */}
            <div className="w-full mb-6 mx-auto flex flex-col">
                <div className="bg-card rounded-full px-3 py-2 text-sm w-full flex items-center gap-2">
                    <input
                        value={searchQuery}
                        onChange={e => handleSearchChange(e.target.value, setSearchQuery)}
                        type="text"
                        className="w-full text-arcadia font-bold px-3 py-2 rounded-full focus:outline-none placeholder:italic"
                        placeholder="Buscar un juego en favoritos.."
                    />
                    <div className="h-9 w-9 rounded-full flex items-center justify-center text-white bg-[#FF6108]">
                        {searchIcon}
                    </div>
                </div>
            </div>

        </div>
    )
}
