import { useState, createContext, useContext, useEffect } from 'react'
import api from '../helper/api'

// create context
export const GameContext = createContext(null)

// provider
export const GameProvider = ({ children }) => {
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

    // --> get game by ID
    const getGameById = async (id) => {
        setLoading(true)
        setError(null)
        console.log('loading function')

        try {
            const { data: { game } } = await api.get(`/api/games/${id}`)
            console.log('data from api', game)
            return game
        } catch (error) {
            console.log('failed to get game by id', error)
            setError(error.message || 'Unknown error')
        } finally {
            console.log('change loading set')
            setLoading(false)
        }
    }

    // --> get summary from Gemini
    const getSummary = async (id) => {
        setLoading(true)
        setError(null)

        try {
            const { data } = await api.post(`/api/games/summary/${id}`)
            return data
        } catch (error) {
            console.log('failed to generate summary from ai', error)
            setError(error.message || 'Unknown error')
        } finally {
            setLoading(false)
        }
    }

    return (
        <GameContext.Provider value={{
            error,
            loading,
            games,
            getAllGames,
            getGameById,
            getSummary
        }}>
            {children}
        </GameContext.Provider>
    )
}

// custom hook
export const useGame = () => useContext(GameContext)
