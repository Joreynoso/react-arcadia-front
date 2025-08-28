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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />

            {/* game routes */}
            <Route path='games' element={<Games />} />

            {/* login / register route */}
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />

            {/* not found route */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
