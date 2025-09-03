import { useState, createContext, useContext, useEffect } from "react"
import axios from "axios"
import api from '../helper/api'

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    // --> register
    const register = async ({ email, username, password }) => {
        setLoading(true)
        setError(null)
        try {
            const { data } = await axios.post(
                "https://react-arcadia.onrender.com/api/auth/register",
                { email, username, password }
            )

            if (data.result?.token) {
                setToken(data.result.token)
                localStorage.setItem("token", data.result.token)
            }

            if (data.result?.user) {
                setUser(data.result.user)
                localStorage.setItem("user", JSON.stringify(data.result.user))
            }

            return data.result
        } catch (err) {
            if (err.response?.status === 401) {
                setError("User already registered")
            } else {
                setError("Registration failed")
            }
        } finally {
            setLoading(false)
        }
    }

    // --> login
    const login = async ({ email, password }) => {
        setLoading(true)
        setError(null)
        try {
            const { data: { result } } = await axios.post(
                "https://react-arcadia.onrender.com/api/auth/login",
                { email, password }
            )

            setUser(result.user)
            setToken(result.token)
            localStorage.setItem("user", JSON.stringify(result.user))
            localStorage.setItem("token", result.token)

            return result
        } catch (err) {
            setError("User or passwor wrong")
            return null
        } finally {
            setLoading(false)
        }
    }

    // --> fetch /me
    const fetchMe = async () => {
        try {
            const { data } = await api.get("api/user/me")
            return data
        } catch (err) {
            console.error("No se pudo cargar usuario:", err)
            return null
        }
    }

    // --> check permissions
    const hasPermission = (perm) => {
        return user?.permissions?.includes(perm)
    }

    // --> logout
    const logout = () => {
        setUser(null)
        setToken("")
        localStorage.removeItem("user")
        localStorage.removeItem("token")
    }

    // --> load user & token from localStorage on mount
    // --> cargar usuario al montar el provider
    useEffect(() => {
        const loadUser = async () => {
            setLoading(true)
            const token = localStorage.getItem("token")
            if (!token) {
                setLoading(false)
                return
            }

            const userData = await fetchMe()
            setUser(userData)
            setLoading(false)
        }
        loadUser()
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            token,
            loading,
            error,
            register,
            login,
            logout,
            hasPermission
        }}>
            {children}
        </AuthContext.Provider>
    )
}

// custom hook
export const useAuth = () => useContext(AuthContext)
