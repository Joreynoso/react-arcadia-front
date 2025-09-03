// import
import { useFavorite } from '../context/favoriteContext'
import { useState } from 'react'

import LoadingCard from './LoadingCard'
import GoBackButton from './GoBackButton'
import FavoriteCard from './FavoriteCard'
import Pagination from './Pagination'

export default function FavoritesList() {
    const { loading, error, favorites } = useFavorite()
    const [currentPage, setCurrentPage] = useState(1)
    const favoritesPerPage = 10

    // calculate visible favorites in current page
    const firsFavoriteIndex = (currentPage - 1) * favoritesPerPage
    const lasFavoriteIndex = firsFavoriteIndex + favoritesPerPage
    const visibleFavorites = favorites.slice(firsFavoriteIndex, lasFavoriteIndex)

    // totalPages
    const totalPages = Math.ceil(favorites.length / favoritesPerPage)

    // handle pagination
    const handlePrevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1))
    const handleNextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages))

    // condicional rendering
    if (loading) return <LoadingCard />
    if (error) return <p className='text-white text-lg'>{error}</p>

    const favoritesList = visibleFavorites.map(favorite => {
        const hasImage = !!favorite.background_image
        return (
            <div
                key={favorite.id}
                className='transition-transform duration-300 ease-in-out hover:-translate-y-2'
            >
                <FavoriteCard
                    id={favorite.id}
                    name={favorite.name}
                    released={favorite.released}
                    background_image={favorite.background_image}
                    hasImage={hasImage}
                />
            </div>
        )
    })

    // render return
    return (
        <>
            {favorites.length === 0 ? (<div className='w-full text-center flex flex-col justify-center items-center'>
                <h3 className='text-white mb-4 color-arcadia'>Oops! seems like you don't have added <br />any favorite game yet</h3>
                <GoBackButton />
            </div>) : (
                <div className='w-full flex flex-col'>
                    <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-10">
                        {favoritesList}
                    </div>
                    <Pagination
                        page={currentPage}
                        totalPages={totalPages}
                        handlePrev={handlePrevPage}
                        handleNext={handleNextPage}
                    />
                </div>
            )}
        </>
    )
}
