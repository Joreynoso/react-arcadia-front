// import
import FavoriteCard from './FavoriteCard'
import { useFavorite } from '../context/favoriteContext'
import LoadingCard from './LoadingCard'

export default function FavoritesList() {
    const { loading, error, favorites } = useFavorite()

    if (loading) return <LoadingCard />
    if (error) return <p className='text-white text-lg'>{error}</p>

    const favoritesMappedList = favorites
        .filter(fav => fav && fav.game) // filtramos elementos inválidos
        .map(fav => (
            <div
                key={fav._id}
                className="transition-transform duration-300 ease-in-out hover:-translate-y-2"
            >
                <FavoriteCard
                    id={fav.game._id}
                    name={fav.game.name}
                    released={fav.game.released}
                    background_image={fav.game.background_image}
                />
            </div>
        ))

    // render return
    return (
        <>
            <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-6xl mb-10">
                {favoritesMappedList}
            </div>
        </>
    )
}
