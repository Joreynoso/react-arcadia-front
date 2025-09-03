// --> import componentes
import Layout from './components/Layout'
import Home from './pages/Home'

// --> import react router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// --> import pages
import Games from './pages/Games'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import GameDetail from './pages/GameDetail'
import Forbidden from './pages/Forbidden'
import Favorites from './pages/Favorites'
import GameCreate from './pages/GameCreate'
import GameUpdate from './pages/GameUpdate'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />

            {/* Games routes */}
            <Route path="games">
              <Route index element={<Games />} />
              <Route path="add" element={<GameCreate />} />
              <Route path=":id" element={<GameDetail />} />
              <Route path=":id/edit" element={<GameUpdate />} />
            </Route>

            {/* login / register route */}
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />

            {/* favorites routes */}
            <Route path='favorites' element={<Favorites />} />

            {/* not found route */}
            <Route path="*" element={<NotFound />} />

            {/* forbidden y server error routes */}
            <Route path="403" element={<Forbidden />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
