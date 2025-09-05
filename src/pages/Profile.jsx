// imports
import { useAuth } from '../context/authContext'
import GoBackButton from '../components/GoBackButton'
import LoadingCard from '../components/LoadingCard'

import { useFavorite } from '../context/favoriteContext'

export default function Profile() {
    const { user } = useAuth()
    const { favorites, loading } = useFavorite()

    if (loading) return <LoadingCard />
    // si favorites todavía no existe o es null
    const totalFavorites = favorites?.length || 0

    const favoriteGenre = favorites?.flatMap(f => f.genres).reduce((acc, genre) => {
        acc[genre] = (acc[genre] || 0) + 1
        return acc
    }, {}) || {}

    const topGenre = Object.entries(favoriteGenre).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A'

    // primer favorito
    const firstFavorite = favorites?.[0] || null

    // iconStar
    const iconStar = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-[#FFDA07]">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
        </svg>
    )

    // render return
    return (
        <>
            <div className="w-full max-w-7xl h-full flex flex-col justify-center items-center flex-1 mt-10 mb-10 mx-auto px-4 sm:px-6 lg:px-10 py-4">
                <h3 className="uppercase text-2xl md:text-3xl lg:text-4xl sm:max-w-2xl max-w-lg leading-snug text-white text-center mb-10">
                    Bienvenido a tu perfil<br /><span className='color-arcadia'>{user.username}</span>
                </h3>

                <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-center gap-4 mb-10'>

                    {/* info */}
                    <div className='w-full min-h-40 sm:h-72 bg-card border-arcadia rounded-xl p-5 py-5 flex flex-col justify-center items-center'>
                        <h2 className='text-arcadia font-semibold text-lg mb-4'>Información personal</h2>
                        <div className='w-full bg-[#ECC799] px-4 py-2 rounded-full text-arcadia mb-2
                            focus:outline-none focus:ring-2 focus:ring-[#A6755A]'>
                            <p className='text-base font-semibold'>Nombre: {user.username}</p>
                        </div>

                        <div className='w-full bg-[#ECC799] px-4 py-2 rounded-full text-arcadia mb-2
                            focus:outline-none focus:ring-2 focus:ring-[#A6755A]'>
                            <p className='text-base font-semibold'>Email: {user.email}</p>
                        </div>

                        <div className='w-full bg-[#ECC799] px-4 py-2 rounded-full text-arcadia mb-2
                            focus:outline-none focus:ring-2 focus:ring-[#A6755A]'>
                            <p className='text-base font-semibold'>Usuario desde: {user.createdAt.slice(0, 10)}</p>
                        </div>
                    </div>

                    <div className='w-full h-72 bg-card border-arcadia rounded-xl flex justify-center items-center p-5'>
                        <div className='w-full h-full rounded-lg bg-[#ECC799] flex flex-col justify-center items-center'>
                            <h2 className='text-arcadia font-semibold text-lg mb-4'>Genero Favorito</h2>
                            <span className='bg-[#DB8E6B] border-arcadia px-4 py-2 
                            rounded-full flex justify-center items-center gap-2'>
                                <img src="/images/infoDoubleSword.svg" alt="infoDoubleSword.svg" className='size-6' />
                                <p className='text-arcadia font-semibold'>{topGenre}</p>
                            </span>
                        </div>
                    </div>

                    <div className='w-full h-72 bg-card border-arcadia rounded-xl flex justify-center items-center p-5'>
                        <div className='w-full h-full rounded-lg bg-[#ECC799] flex flex-col justify-center items-center'>
                            <h2 className='text-arcadia font-semibold text-lg mb-4'>Total de favoritos</h2>
                            <span className='bg-[#DB8E6B] border-arcadia px-4 py-2 
                            rounded-full flex justify-center items-center gap-2'>
                                {iconStar}
                                <p className='text-arcadia font-semibold'>{totalFavorites}</p>
                            </span>
                        </div>
                    </div>

                    <div className='w-full h-72 bg-card border-arcadia rounded-xl flex justify-center items-center p-5'>
                        <div className='w-full h-full rounded-lg bg-[#ECC799] flex flex-col justify-center items-center p-3'>
                            <h2 className='text-arcadia font-semibold text-lg mb-4'>Primer favorito</h2>
                            <span className='bg-[#DB8E6B] border-arcadia px-1 py-1 text-center 
                            rounded-full flex justify-center items-center'>
                                <p className='text-arcadia font-semibold'>{firstFavorite ? firstFavorite.name : 'N/A'}</p>
                            </span>
                        </div>
                    </div>
                </div>

                <GoBackButton />
            </div>
        </>
    )
}