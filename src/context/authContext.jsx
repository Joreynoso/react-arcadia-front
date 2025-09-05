import { useState, createContext, useContext, useEffect } from "react"
import api from "../helper/api"

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState("")
    const [loading, setLoading] = useState(false)
    const [loadingUser, setLoadingUser] = useState(true)
    const [error, setError] = useState(null)

    const register = async ({ email, username, password }) => {
        setLoading(true)
        setError(null)
        try {
            const result = await api.register({ email, username, password })
            if (result?.token) setToken(result.token)
            if (result?.user) setUser(result.user)
            return result
        } catch (err) {
            setError("Registration failed")
            return null
        } finally {
            setLoading(false)
        }
    }

    const login = async ({ email, password }) => {
        setLoading(true)
        setError(null)
        try {
            const result = await api.login({ email, password })
            if (result?.token) setToken(result.token)
            if (result?.user) setUser(result.user)
            return result
        } catch (err) {
            setError("User or password wrong")
            return null
        } finally {
            setLoading(false)
        }
    }

    const logout = () => {
        setUser(null)
        setToken("")
        localStorage.removeItem("user")
        localStorage.removeItem("token")
    }

    useEffect(() => {
        const storedUser = localStorage.getItem("user")
        const storedToken = localStorage.getItem("token")
        if (storedUser) setUser(JSON.parse(storedUser))
        if (storedToken) setToken(storedToken)

        setLoadingUser(false)
    }, [])

    return (
        <AuthContext.Provider value={{ user, token, loading, error, register, login, logout, loadingUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
