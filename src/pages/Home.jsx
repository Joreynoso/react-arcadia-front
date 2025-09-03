// import components
import ActionSection from '../components/ActionSection'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import CloudSection from '../components/CloudSection'
''
export default function Home() {

    // return render
    return (
        <>
            <div className='w-full min-h-screen flex flex-col justify-center items-center xl:px-0'>
                <HeroSection />
                <InfoSection />
                <CloudSection />
            </div>
        </>
    )
}