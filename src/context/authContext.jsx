import { useState, createContext, useContext, useEffect } from "react"
import api from "../helper/api"

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loadingUser, setLoadingUser] = useState(true)  // empieza true porque aún no sabemos el user
    const [token, setToken] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    // --> fetch /me
    const fetchMe = async () => {
        try {
            const { data } = await api.get("/api/user/me")
            console.log("fetchMe user:", data) // <--- debug
            return data
        } catch (err) {
            console.error("No se pudo cargar usuario:", err)
            return null
        }
    }

    // --> register
    const register = async ({ email, username, password }) => {
        setLoading(true)
        setError(null)
        try {
            const result = await api.register({ email, username, password })

            // guardar token
            if (result?.token) {
                setToken(result.token)
            }

            // traer usuario completo con permisos
            const userData = await fetchMe()
            if (userData) {
                setUser(userData)
                localStorage.setItem("user", JSON.stringify(userData))
            }

            return result
        } catch (err) {
            setError("Registration failed")
            return null
        } finally {
            setLoading(false)
        }
    }

    // --> login
    const login = async ({ email, password }) => {
        setLoading(true)
        setError(null)
        try {
            const result = await api.login({ email, password })

            // guardar token
            if (result?.token) setToken(result.token)

            // traer usuario completo con permisos
            const userData = await fetchMe()
            if (userData) {
                setUser(userData)
                localStorage.setItem("user", JSON.stringify(userData))
            }

            return result
        } catch (err) {
            setError("User or password wrong")
            return null
        } finally {
            setLoading(false)
        }
    }

    // --> check permissions
    const hasPermission = (perm) => user?.permissions?.includes(perm)

    // --> logout
    const logout = () => {
        setUser(null)
        setToken("")
        localStorage.removeItem("user")
        localStorage.removeItem("token")
    }

    // --> cargar usuario al montar el provider
    useEffect(() => {
        const loadUser = async () => {
            try {
                const token = localStorage.getItem("token")
                if (!token) return
                const userData = await fetchMe()
                if (userData) setUser(userData)
            } catch (err) {
                console.error(err)
                setUser(null)
            } finally {
                setLoadingUser(false)  // solo desactiva cuando fetchMe termina
            }
        }
        loadUser()
    }, [])

    return (
        <AuthContext.Provider
            value={{
                user,
                loadingUser,
                token,
                loading,
                error,
                register,
                login,
                logout,
                hasPermission
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

// custom hook
export const useAuth = () => useContext(AuthContext)
