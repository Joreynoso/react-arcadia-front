// --> import componentes
import Layout from './components/Layout'
import Home from './pages/Home'

// --> import react router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
