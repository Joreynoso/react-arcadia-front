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

import PrivateRoute from './router/PrivateRoute'
import Profile from './pages/Profile'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>

            {/* Home */}
            <Route index element={<Home />} />

            {/* Auth routes */}
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />

            {/* Profile user route */}
            <Route element={<PrivateRoute requiredPermission="read:profile" />}>
              <Route path="profile" element={<Profile/>} />
            </Route>

            {/* Games routes */}
            <Route element={<PrivateRoute requiredPermission="read:games" />}>
              <Route path="games">
                <Route index element={<Games />} />
                <Route path=":id" element={<GameDetail />} />
              </Route>
            </Route>

            <Route element={<PrivateRoute requiredPermission="create:game" />}>
              <Route path="games/add" element={<GameCreate />} />
            </Route>

            <Route element={<PrivateRoute requiredPermission="update:game" />}>
              <Route path="games/:id/edit" element={<GameUpdate />} />
            </Route>

            {/* Favorites routes */}
            <Route element={<PrivateRoute requiredPermission="read:favorites" />}>
              <Route path='favorites' element={<Favorites />} />
            </Route>

            {/* Error routes */}
            <Route path="403" element={<Forbidden />} />
            <Route path="*" element={<NotFound />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
