// imports
import { useFavorite } from '../context/favoriteContext'
import { useState, useEffect } from 'react'

import LoadingCard from './LoadingCard'
import GoBackButton from './GoBackButton'
import FavoriteCard from './FavoriteCard'
import Pagination from './Pagination'
import ModalConfirm from './ModalConfirm'

export default function FavoritesList({ searchQuery }) {
  const { loading, error, favorites, removeFavorite } = useFavorite()
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [selectedFavorite, setSelectedFavorite] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const favoritesPerPage = 10

  // reset to re-search
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery])

  if (loading) return <LoadingCard />
  if (error) return <p className="text-white">{error}</p>

  // filter favorites, searchQuery comes from /favorites FavoriteSearch
  const filteredFavorites = favorites.filter(fav =>
    fav.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // calc index for pagination
  const firstFavoriteIndex = (currentPage - 1) * favoritesPerPage
  const lastFavoriteIndex = firstFavoriteIndex + favoritesPerPage
  const visibleFavorites = filteredFavorites.slice(firstFavoriteIndex, lastFavoriteIndex)

  // calc total pages for results
  const totalPages = Math.ceil(filteredFavorites.length / favoritesPerPage)

  // modal confirm
  const handleRemoveRequest = (favorite) => {
    setSelectedFavorite(favorite)
    setConfirmOpen(true)
  }

  const closeModal = () => {
    setConfirmOpen(false)
    setSelectedFavorite(null)
  }

  const confirmRemove = async () => {
    if (!selectedFavorite) return
    await removeFavorite(selectedFavorite.id)
    closeModal()
  }

  // render favorites map lis
  const favoritesList = visibleFavorites.map(fav => {
    const hasImage = !!fav.background_image
    return (
      <div key={fav.id} className='transition-transform duration-300 ease-in-out hover:-translate-y-2'>
        <FavoriteCard
          {...fav}
          hasImage={hasImage}
          onRemoveRequest={() => handleRemoveRequest(fav)}
        />
      </div>
    )
  })

  // 🔹 Render
  if (favorites.length === 0) {
    return (
      <div className='w-full text-center flex flex-col justify-center items-center'>
        <h3 className='text-white mb-4 color-arcadia'>
          ¡Ups! Parece que aún no has agregado <br />ningún juego a favoritos.
        </h3>
        <GoBackButton />
      </div>
    )
  }

  return (
    <div className='w-full flex flex-col'>
      {/* Favoritos */}
      <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-10">
        {favoritesList}
      </div>

      {/* Paginación */}
        <Pagination
          page={currentPage}
          totalPages={totalPages}
          handlePrev={() => setCurrentPage(p => Math.max(p - 1, 1))}
          handleNext={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
        />

      {/* Modal de confirmación */}
      <ModalConfirm
        open={confirmOpen}
        message={`Remover "${selectedFavorite?.name}" de tus favoritos?`}
        onConfirm={confirmRemove}
        onCancel={closeModal}
      />
    </div>
  )
}
