
// --> import componentes
import Navbar from './components/Navbar'
import InfoSection from './components/InfoSection'
import HeroSection from './components/HeroSection'
import RegisterForm from './components/RegisterForm'
import FooterSection from './components/FooterSection'

function App() {
  return (
    <>
      <div className="w-full">
        <Navbar />
        <HeroSection />
        <InfoSection />
        <RegisterForm />
        <FooterSection />
      </div>
    </>
  )
}

export default App
