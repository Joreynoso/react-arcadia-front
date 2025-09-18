import { useState, createContext, useContext, useEffect } from 'react'
import { useFavorite } from './favoriteContext'
import api from '../helper/api'

// create context
export const GameContext = createContext(null)

// provider
export const GameProvider = ({ children }) => {
    const { getFavorites } = useFavorite()
    const [games, setGames] = useState([])
    const [genres, setGenres] = useState([])
    const [sort, setSort] = useState('desc')
    const [platforms, setPlatforms] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    // set limit items per page
    const limit = 20

    // modal summary
    const [modalOpen, setModalOpen] = useState(false)
    const [summary, setSummary] = useState(null)

    // modal message
    const [openToast, setOpenToast] = useState(false)
    const [messageToast, setMessageToast] = useState(null)

    // manejar modal de mensajes
    const showMessage = (message) => {
        setMessageToast(message)
        setOpenToast(true)
    }

    // --> get all games
    const getAllGames = async (page = 1, limit = 20) => {
        setLoading(true)
        setError(null)
        try {
            const { data } = await api.get(`/api/games?limit=${limit}&page=${page}`)
            setGames(data.games || [])
            setTotalPages(data.totalPages || 1)
            console.log('-->[CONTEXT GAME] list of games', data)
            return data
        } catch (err) {
            setError('Error to get all games')
        } finally {
            setLoading(false)
        }
    }

    // --> get all genres
    const getAllGenres = async () => {
        setLoading(true)
        setError(null)
        try {
            const { data } = await api.get('/api/games/all-genres')
            setGenres(data.totalGenres || [])
            return data
        } catch (err) {
            setError(err.message || 'Error al cargar géneros')
        } finally {
            setLoading(false)
        }
    }

    // --> get all genres
    const getAllPlatforms = async () => {
        setLoading(true)
        setError(null)
        try {
            const { data } = await api.get('/api/games/all-platforms')
            setPlatforms(data.totalPlatforms || [])
            return data
        } catch (err) {
            setError(err.message || 'Error al cargar plataformas')
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
            return null
        } finally {
            console.log('change loading set')
            setLoading(false)
        }
    }

    // --> create a new game
    const createGame = async (newGame) => {
        setLoading(true)
        setError(null)

        try {
            const { data } = await api.post('/api/games', newGame)
            showMessage(`${data.game.name} created`)
            return data

        } catch (error) {
            console.log('failed to create a new game', error)
            setError(error.message || 'Unknown error')
            return null
        } finally {
            setLoading(false)
        }
    }

    // --> update a game
    const updateGame = async (id, payload) => {
        setLoading(true)
        setError(null)
        try {
            const { data } = await api.put(`/api/games/${id}`, payload)

            setGames(prev => prev.map(g => g._id === id ? data.game : g))
            showMessage(`${data.game.name} actualizado`)

            // refresh favorites
            await getFavorites()

            return data.game
        } catch (err) {
            setError(err.message || 'Unknown error')
            return null
        } finally {
            setLoading(false)
        }
    }

    // --> delete a game
    const deleteGame = async (id) => {
        setLoading(true)
        setError(null)

        try {
            const { data } = await api.delete(`/api/games/${id}`)
            showMessage(`${data.game.name} borrado`)
            setGames(prev => prev.filter(g => g._id !== id))

            // refresh favorites
            await getFavorites()

            return data
        } catch (error) {
            console.log('failed to delete a game', error)
            setError(error.message || 'Unknown error')
            return null
        } finally {
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
            setError("No pudimos encontrar el juego")
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

    useEffect(() => {
        getAllGames(page, limit)
    }, [page])

    useEffect(() => {
        getAllGenres()
        getAllPlatforms()
    }, [])

    return (
        <GameContext.Provider value={{
            error,
            loading,
            games,
            genres,
            platforms,

            getAllGames,
            page,
            setPage,
            totalPages,

            getGameById,
            getSummary,
            searchGames,
            searchByDate,
            createGame,
            updateGame,
            deleteGame,

            summary,
            setModalOpen,
            modalOpen,

            messageToast,
            setOpenToast,
            openToast

        }}>
            {children}
        </GameContext.Provider>
    )
}

// custom hook
export const useGame = () => useContext(GameContext)

