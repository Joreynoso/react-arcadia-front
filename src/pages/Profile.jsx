// imports
import { useAuth } from '../context/authContext'
import GoBackButton from '../components/GoBackButton'
import LoadingCard from '../components/LoadingCard'

export default function Profile() {

    const { user, loading } = useAuth()

    console.log('usuario en su perfil..', user)

    if (loading) {
        return <LoadingCard />
    }

    // render return
    return (
        <>
            <div className="w-full max-w-7xl h-full flex flex-col justify-center items-center flex-1 mt-10 mb-10 mx-auto px-4 sm:px-6 lg:px-10 py-4">
                <h3 className="uppercase text-2xl md:text-3xl lg:text-4xl sm:max-w-2xl max-w-lg leading-snug text-white text-center mb-10">
                    Bienvenido a tu perfil<br /><span className='color-arcadia'>{user.username}</span>
                </h3>

                <GoBackButton />
            </div>
        </>
    )
}