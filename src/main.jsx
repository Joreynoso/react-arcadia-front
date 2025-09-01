import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// import providers
import { AuthProvider } from './context/authContext.jsx'
import { GameProvider } from './context/gamesContext.jsx'
import { FavoriteProvider } from './context/favoriteContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <GameProvider>
        <FavoriteProvider>
          <App />
        </FavoriteProvider>
      </GameProvider>
    </AuthProvider>
  </StrictMode>,
)
