// import components
import ActionSection from '../components/ActionSection'
import InfoSection from '../components/InfoSection'


export default function Home() {

    // return render
    return (
        <>
            <div className='w-full h-full flex flex-col justify-center items-center px-4 xl:px-0 flex-1'>
                <InfoSection />
                <ActionSection />
            </div>
        </>
    )
}