// --> import componentes
import Layout from './components/Layout'
import Home from './pages/Home'
import PrivateRoute from './components/PrivateRoute'
// --> import react router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// --> import pages
import Games from './pages/Games'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import Forbidden from './pages/Forbidden'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />

            {/* Games protegido */}
            <Route
              path='games'
              element={
                <PrivateRoute permission="read:games">
                  <Games />
                </PrivateRoute>
              }
            />

            {/* login / register route */}
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />

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
