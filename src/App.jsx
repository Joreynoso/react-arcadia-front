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
import GameEdit from './pages/GameEdit'
import Profile from './pages/Profile'

// --> dashboard
import Dashboard from './pages/Dashboard'
import DashboardGames from './pages/DashboardGames'
import DashboardUsers from './pages/DashboardUsers'
import DashboardRoles from './pages/DashboardRoles'
import DashboardPermissions from './pages/DashboardPermissions'

// --> private route
import PrivateRoute from './router/PrivateRoute'
import GamesPage from './pages/GamesPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />

            {/* dashboard routes */}
            <Route path="dashboard" element={<Dashboard />}>
              <Route path="users" element={<DashboardUsers />} />
              <Route path="roles" element={<DashboardRoles />} />
              <Route path="permissions" element={<DashboardPermissions />} />
              <Route path="games" element={<DashboardGames />} />
            </Route>

            {/* Game routes */}
            <Route path="games" element={<PrivateRoute rolesAllowed={["user", "editor", "admin"]} />}>
              {/* cualquier usuario logeado */}
              <Route index element={<GamesPage />} />

              <Route element={<PrivateRoute rolesAllowed={["admin"]} />}>
                <Route path="add" element={<GameCreate />} />
              </Route>

              <Route element={<PrivateRoute rolesAllowed={["user", "editor", "admin"]} />}>
                <Route path=":id" element={<GameDetail />} />
              </Route>
              
              <Route element={<PrivateRoute rolesAllowed={["editor", "admin"]} />}>
                <Route path=":id/edit" element={<GameEdit />} />
              </Route>

            </Route>

            {/* login / register route */}
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />

            {/* profile route */}
            <Route element={<PrivateRoute rolesAllowed={["user", "editor", "admin"]} />}>
              <Route path="profile" element={<Profile />} />
            </Route>

            {/* favorites routes */}
            <Route element={<PrivateRoute rolesAllowed={["user", "editor", "admin"]} />}>
              <Route path='favorites' element={<Favorites />} />
            </Route>

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
