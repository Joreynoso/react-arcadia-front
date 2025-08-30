import { useState, useEffect } from 'react'
import { createContext, useContext } from 'react'
import axios from 'axios'

// create context
export const GameContext = createContext(null)

// provider
export const GameProvider = ({ children }) => {

    // --> setting states
    const [games, setGames] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    return (
        <GameContext.Provider value={{

        }}>
            {children}
        </GameContext.Provider>
    )
}