// import components
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import CloudSection from '../components/CloudSection'
import CardsSection from '../components/CardsSection'

import { useAuth } from '../context/authContext'
import { useEffect } from 'react'

export default function Home() {
    const { user } = useAuth()

    useEffect(() => {
        console.log("Usuario:", user)
        console.log("Permisos:", user?.permissions)
    }, [user])

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