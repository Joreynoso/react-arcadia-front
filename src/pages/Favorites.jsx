// import
import { useState } from 'react'
import FavoriteSearch from '../components/FavoriteSearch'
import FavoritesList from '../components/FavoritesList'
import ModalMessage from "../components/ModalMessage"
import { useFavorite } from "../context/favoriteContext"

export default function Favorites() {
    const { modalOpen, setModalOpen, modalMessage } = useFavorite()
    const [ searchQuery, setSearchQuery] = useState('')

    // return render
    return (
        <>
            <div className='w-full max-w-7xl h-full flex flex-col justify-center items-center flex-1 mt-10 mb-10 mx-auto px-4 sm:px-6 lg:px-10 py-4'>
                <h3 className="uppercase text-2xl md:text-3xl lg:text-4xl sm:max-w-2xl max-w-lg leading-snug mb-10 text-white text-center">
                    Welcome to your <br /> <span className='color-arcadia'>Library</span>
                </h3>

                {/* search */}
                <FavoriteSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

                {/* favorites list */}
                <FavoritesList searchQuery={searchQuery} />

                {/* modalSummary */}
                <ModalMessage
                    open={modalOpen}
                    message={modalMessage}
                    onClose={() => setModalOpen(false)}
                />
            </div>
        </>
    )
}