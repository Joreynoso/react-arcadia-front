
// --> import componentes
import Navbar from './components/Navbar'
import InfoSection from './components/InfoSection'
import HeroSection from './components/HeroSection'

function App() {
  return (
    <>
      <div className="w-full min-h-screen mx-auto flex flex-col">

        <Navbar />
        <HeroSection />
        <InfoSection />

        <div className='w-full flex flex-col px-3 py-6 text-center'>

          <div className='bg-card border-2 border-[#7D4C38] rounded-3xl p-5 py-10'>

            <h3 className='libre-bold uppercase text-2xl text-[#7D4C38] mt-6 mb-6 leading-tight'>
              ADD AS MANY GAMES AS YOUR LIKE TO YOUR FAVORITES
            </h3>

            <h4 className='text-lg libre-bold  text-[#7D4C38] mb-4 tracking-wide'>
              Become a member
            </h4>

            <form className='flex flex-col gap-4 libre-regular justify-center items-center'>
              <input
                type="email"
                placeholder='Enter your email'
                className='w-full rounded-full bg-[#ECC799] px-4 py-3 text-sm placeholder-opacity-70'
              />

              <input
                type="text"
                placeholder='Write your username'
                className='w-full rounded-full bg-[#ECC799] px-4 py-3 text-sm placeholder-opacity-70'
              />

              <input
                type="password"
                placeholder='Create a password'
                className='w-full rounded-full bg-[#ECC799] px-4 py-3 text-sm placeholder-opacity-70'
              />

              <button className='text-white libre-bold uppercase text-sm rounded-full px-6 py-2 bg-[#FF6108]'>
                REGISTER
              </button>
            </form>

          </div>
        </div>


      </div>
    </>
  )
}

export default App
