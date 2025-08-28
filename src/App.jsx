
// --> import componentes
import Navbar from './components/Navbar'
import InfoSection from './components/InfoSection'
import HeroSection from './components/HeroSection'
import RegisterForm from './components/RegisterForm'

function App() {
  return (
    <>
      <div className="w-full min-h-screen mx-auto flex flex-col">

        <Navbar />
        <HeroSection />
        <InfoSection />
        <RegisterForm/>
      </div>
    </>
  )
}

export default App
