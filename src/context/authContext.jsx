import { useState, createContext, useContext, useEffect } from "react"
import axios from "axios"

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [token, setToken] = useState()
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
                setToken(data.token)
                localStorage.setItem("token", data.token)
            }

            if (data.result?.user) setUser(data.user)

            return data
        } catch (err) {
            setError(err.response?.data?.message || "Registration failed")
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
            const { data: { result } } = await axios.post("https://react-arcadia.onrender.com/api/auth/login", { email, password })

            setUser(result.user)
            setToken(result.token)

            localStorage.setItem("user", JSON.stringify(result.user))
            localStorage.setItem("token", result.token)

            return result
        } catch (err) {
            setError(err.response?.data?.message || "Login failed")
            return null
        } finally {
            setLoading(false)
        }
    }

    // --> logout
    const logout = () => {
        setToken("")
        setUser(null)
        localStorage.removeItem("token")
    }

    // saved user and token
    useEffect(() => {
        const storedUser = localStorage.getItem("user")
        const storedToken = localStorage.getItem("token")

        if (storedUser) setUser(JSON.parse(storedUser))
        if (storedToken) setToken(storedToken)
    }, [])

    return (
        <AuthContext.Provider value={{ user, token, loading, error, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

// custom hook
export const useAuth = () => useContext(AuthContext)
