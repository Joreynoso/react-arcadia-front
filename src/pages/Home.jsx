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
            <div className='w-full h-full flex flex-col justify-center items-center xl:px-0 flex-1'>
                <HeroSection />
                <InfoSection />
                <CloudSection />
            </div>
        </>
    )
}