// import
import FavoriteCard from './FavoriteCard'
import { useFavorite } from '../context/favoriteContext'
import LoadingCard from './LoadingCard'
import GoBackButton from '../components/GoBackButton'

export default function FavoritesList() {
    const { loading, error, favorites } = useFavorite()

    const favoritesList = favorites.map(favorite => (
        <div
            key={favorite.id}
            className='transition-transform duration-300 ease-in-out 
            hover:-translate-y-2'>
            <FavoriteCard
                id={favorite.id}
                name={favorite.name}
                released={favorite.released}
                background_image={favorite.background_image} />
        </div>
    ))

    if (loading) return <LoadingCard />
    if (error) return <p className='text-white text-lg'>{error}</p>

    // render return
    return (
        <>
            {favorites.length === 0 ? (<div className='w-full text-center flex flex-col justify-center items-center'>
                <h3 className='text-white mb-4 color-arcadia'>Oops! seems like you don't have added <br />any favorite game yet</h3>
                <GoBackButton />
            </div>) : (
                <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 max-w-6xl mb-10">
                    {favoritesList}
                </div>
            )}
        </>
    )
}
