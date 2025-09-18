import { useState } from 'react'
import { useGame } from "../context/gamesContext"
import GameCard from "./GameCard"

export default function GameListComponent({ onDelete }) {
    const { games, genres, platforms, setPage, getAllGames } = useGame()

    const [query, setQuery] = useState({
        genre: "",
        platform: "",
        sort: "desc"
    })

    // función genérica para actualizar filtros
    const updateQuery = (newValues) => {
        const updatedQuery = { ...query, ...newValues }
        setQuery(updatedQuery)
        setPage(1) // resetear página
        getAllGames({ page: 1, ...updatedQuery })
    }

    const handleGenreChange = (e) => updateQuery({ genre: e.target.value })
    const handlePlatformChange = (e) => updateQuery({ platform: e.target.value })
    const handleSortChange = (e) => updateQuery({ sort: e.target.value })

    const clearFilters = () => {
        const resetQuery = { genre: "", platform: "", sort: "desc" }
        setQuery(resetQuery)
        setPage(1)
        getAllGames({ page: 1, ...resetQuery })
    }

    return (
        <>
            {/* filtros */}
            <div className="w-full flex filters gap-2 mb-4 flex-wrap">
                <select
                    className="flex-1 bg-card rounded-lg border-arcadia text-arcadia px-3 py-2"
                    value={query.genre}
                    onChange={handleGenreChange}
                >
                    <option value="">Todos los géneros</option>
                    {genres.map(g => (
                        <option key={g} value={g}>{g}</option>
                    ))}
                </select>

                <select
                    className="flex-1 bg-card rounded-lg border-arcadia text-arcadia px-3 py-2"
                    value={query.platform}
                    onChange={handlePlatformChange}
                >
                    <option value="">Todas las plataformas</option>
                    {platforms.map(p => (
                        <option key={p} value={p}>{p}</option>
                    ))}
                </select>

                <select
                    className="flex-1 bg-card rounded-lg border-arcadia text-arcadia px-3 py-2"
                    value={query.sort}
                    onChange={handleSortChange}
                >
                    <option value="desc">Más recientes</option>
                    <option value="asc">Más antiguos</option>
                </select>

                <button
                    onClick={clearFilters}
                    className="bg-arcadia text-white px-3 py-2 rounded-lg"
                >
                    Limpiar filtros
                </button>
            </div>

            {/* lista de juegos */}
            <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-4">
                {games.map(game => (
                    <GameCard
                        key={game._id}
                        id={game._id}
                        name={game.name}
                        released={game.released}
                        background_image={game.background_image}
                        hasImage={!!game.background_image}
                        onDelete={() => onDelete(game)}
                    />
                ))}
            </div>
        </>
    )
}
