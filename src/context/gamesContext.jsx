import { useState, createContext, useContext, useEffect } from 'react'
import api from '../helper/api'

// create context
export const GameContext = createContext(null)

// provider
export const GameProvider = ({ children }) => {
    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const [modalOpen, setModalOpen] = useState(false)
    const [summary, setSummary] = useState(null)

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
            setError('Unknown error')
            return null
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
            setSummary(data.summary)
            setModalOpen(true)
        } catch (err) {
            console.log('failed to generate summary', err)
            setError('failed to generate summary')
            return null
        } finally {
            setLoading(false)
        }
    }

    // --> search games by name
    const searchGames = async (query, page = 1, limit = 20) => {
        setLoading(true)
        setError(null)
        try {
            const { data } = await api.get('/api/games/search', {
                params: { q: query, page, limit }
            })
            setGames(data.games || [])
            return data
        } catch (err) {
            setError("We couldn't find the game.")
            return null
        } finally {
            setLoading(false)
        }
    }

    // --> search games by released date
    const searchByDate = async (page = 1, limit = 20, sort = 'desc') => {
        setLoading(true)
        setError(null)

        try {
            const { data } = await api.get(`/api/games/released`, {
                params: { sort, page, limit }
            })
            setGames(data.games || [])
            return data
        } catch (error) {
            setError("Error to sort games by date")
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
            getSummary,
            searchGames,
            searchByDate,

            summary,
            setModalOpen,
            modalOpen,
        }}>
            {children}
        </GameContext.Provider>
    )
}

// custom hook
export const useGame = () => useContext(GameContext)
