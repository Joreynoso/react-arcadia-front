// import components
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import CloudSection from '../components/CloudSection'
import CardsSection from '../components/CardsSection'

export default function Home() {

    // return render
    return (
        <>
            <div className='w-full min-h-screen flex flex-col justify-center items-center xl:px-0'>
                <HeroSection />
                <InfoSection />
                <CloudSection />
                <CardsSection />
            </div>
        </>
    )
}