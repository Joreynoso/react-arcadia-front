import { useState, createContext, useContext, useEffect } from 'react'
import api from '../helper/api'

// create context
export const GameContext = createContext(null)

// provider
export const GameProvider = ({ children }) => {

    // --> setting states
    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    // --> get all games
    const getAllGames = async (page = 1, limit = 20) => {
        setLoading(true)
        setError(null)
        try {
            const { data } = await api.get(`/api/games?limit=${limit}&page=${page}`)
            setGames(data.games || [])

            return data
        } catch (err) {
            setError('Error to get all games')
        } finally {
            setLoading(false)
        }
    }

    return (
        <GameContext.Provider value={{
            error,
            loading,
            games,
            getAllGames
        }}>
            {children}
        </GameContext.Provider>
    )
}

// custom hook
export const useGame = () => useContext(GameContext)
