import { useState, createContext, useContext, useEffect } from 'react'
import api from '../helper/api'

// Crear contexto
export const FavoriteContext = createContext(null)

// Provider
export const FavoriteProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    // Obtener todos los favoritos del usuario
    const getFavorites = async () => {
        setLoading(true)
        setError(null)

        try {
            const { data } = await api.get('/api/favorites')
            // data.favorites debe ser un array
            setFavorites(data.favorites || [])
            console.log('-->[CONTEXT] lista de favoritos:', data.favorites)
        } catch (err) {
            console.log('Error al obtener favoritos', err)
            setError(err.message || 'Unknown error')
        } finally {
            setLoading(false)
        }
    }

    // Agregar un favorito
    const addFavorite = async (gameId) => {
        setLoading(true)
        setError(null)

        try {
            const { data } = await api.post('/api/favorites/add', { gameId })

            if (data.game) {
                setFavorites(prev => [...prev, data.game])
                console.log('-->[CONTEXT] favorito agregado', data.game)
            } else {
                console.log('El juego ya estaba en favoritos, no se agrega nada')
            }

        } catch (error) {
            console.log('failed to add new favorite', error)
            setError(error.message || 'Unknown error')
        } finally {
            setLoading(false)
        }
    }

    // QUitar un favorito
    const removeFavorite = async (gameId) => {
        setLoading(true)
        setError(null)
        try {
            const { data } = await api.delete('/api/favorites/remove', {
                data: { gameId }
            })

            setFavorites(prev => prev.filter(f => f.id !== gameId))
            console.log('-->[CONTEXT] favorito eliminado', gameId)
            console.log('-->[CONTEXT] favorito eliminado', data.game)

        } catch (err) {
            console.log('Error al eliminar favorito', err)
            setError(err.message || 'Unknown error')
            throw err
        } finally {
            setLoading(false)
        }
    }

    // Cargar favoritos al inicio
    useEffect(() => {
        getFavorites()
    }, [])

    return (
        <FavoriteContext.Provider value={{
            favorites,
            loading,
            error,
            setFavorites,
            addFavorite,
            removeFavorite
        }}>
            {children}
        </FavoriteContext.Provider>
    )
}

// Hook personalizado
export const useFavorite = () => useContext(FavoriteContext)
