import { useState, createContext, useContext } from "react"
import axios from "axios"

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(localStorage.getItem("token") || "")
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
            const { data } = await axios.post('https://react-arcadia.onrender.com/api/auth/login', { email, password })

            if (data.result?.token) {
                setToken(data.token)
                localStorage.setItem("token", data.token)
            }
            if (data.result?.user) setUser(data.user)

            return data
        } catch (err) {
            setError(err.response?.data?.message || "Login failed")
            return null
        } finally {
            setLoading(false)
        }
    }

    return (
        <AuthContext.Provider value={{ user, token, loading, error, register, login }}>
            {children}
        </AuthContext.Provider>
    )
}

// custom hook
export const useAuth = () => useContext(AuthContext)
