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
            console.log('Favoritos cargados:', data.favorites)
        } catch (err) {
            console.log('Error al obtener favoritos', err)
            setError(err.message || 'Unknown error')
        } finally {
            setLoading(false)
        }
    }

    // Agregar un favorito
    const addFavorite = async (gameid) => {
        setLoading(true)
        setError(null)

        try {
            const { data } = await api.post('/api/favorites/add', { gameid })

            if (data.favorite) {
                setFavorites(prev => [...prev, data.favorite])
                console.log('Favorito agregado:', data.favorite)
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

    // qQUitar un favorito
    const removeFavorite = async (gameid) => {
        setError(null)
        try {
            const { data } = await api.delete('/api/favorites/remove', {
                data: { gameid }
            })

            // opcional: podrías usar data para mostrar mensaje si quieres
            setFavorites(prev => prev.filter(f => f._id !== gameid))
            console.log('Favorito eliminado:', gameid)

        } catch (err) {
            console.log('Error al eliminar favorito', err)
            setError(err.message || 'Unknown error')
            throw err
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
            addFavorite,
            removeFavorite
        }}>
            {children}
        </FavoriteContext.Provider>
    )
}

// Hook personalizado
export const useFavorite = () => useContext(FavoriteContext)
