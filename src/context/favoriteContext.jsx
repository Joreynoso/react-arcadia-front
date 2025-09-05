import { useState, createContext, useContext, useEffect } from 'react'
import api from '../helper/api'
import { useAuth } from './authContext'

// crear contexto
export const FavoriteContext = createContext(null)

// provider
export const FavoriteProvider = ({ children }) => {
    const { token } = useAuth()
    const [favorites, setFavorites] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [modalMessage, setmodalMessage] = useState('')
    const [modalOpen, setModalOpen] = useState(false)

    // manejar modal de mensajes
    const showMessage = (message) => {
        setmodalMessage(message)
        setModalOpen(true)
    }

    // obtener todos los favoritos del usuario
    const getFavorites = async () => {
        setLoading(true)
        setError(null)

        try {
            const { data } = await api.get('/api/favorites')
            const favoritesData = Array.isArray(data.favorites) ? data.favorites : []
            setFavorites(favoritesData)
        } catch (err) {
            if (err.response?.status === 401) {
                setFavorites([])
                setError('Usuario no autenticado')
            } else {
                console.log('Error al obtener favoritos', err)
                setError(err.message || err.response?.data?.message || 'Unknown error')
            }
        } finally {
            setLoading(false)
        }
    }

    // agregar un favorito
    const addFavorite = async (gameId) => {
        setLoading(true)
        setError(null)

        try {
            const { data } = await api.post('/api/favorites/add', { gameId })

            if (data.game) {
                setFavorites(prev => [...prev, data.game])
                showMessage(`${data.game.name} agregado!`)
            } else {
                showMessage(`${data.game.name} ya está en favoritos!`)
                console.log('mensaje', message)
                console.log('modal state', modalOpen)
            }

        } catch (error) {
            console.log('failed to add new favorite', error)
            setError(error.message || 'Unknown error')
        } finally {
            setLoading(false)
        }
    }

    // quitar un favorito
    const removeFavorite = async (gameId) => {
        setLoading(true)
        setError(null)
        try {
            const { data } = await api.delete('/api/favorites/remove', {
                data: { gameId }
            })
            setFavorites(prev => prev.filter(f => f.id !== gameId))
            showMessage(`${data.game.name} removido de favoritos!`)

        } catch (err) {
            console.log('Error al eliminar favorito', err)
            setError(err.message || 'Unknown error')
            throw err
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (token) {
            getFavorites()
        } else {
            setFavorites([])
        }
    }, [token])

    return (
        <FavoriteContext.Provider value={{
            loading,
            error,
            favorites,

            modalOpen,
            modalMessage,
            setmodalMessage,
            setModalOpen,

            setFavorites,
            addFavorite,
            removeFavorite
        }}>
            {children}
        </FavoriteContext.Provider>
    )
}

// hook personalizado
export const useFavorite = () => useContext(FavoriteContext)
