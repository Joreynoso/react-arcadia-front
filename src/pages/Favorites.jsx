// import
import FavoritesList from '../components/FavoritesList'
import ModalMessage from "../components/ModalMessage"
import { useFavorite } from "../context/favoriteContext"

export default function Favorites() {
    const { modalOpen, setModalOpen, modalMessage } = useFavorite()

    // return render
    return (
        <>
            <div className='w-full h-full flex flex-col justify-center items-center flex-1 mt-10 mb-10'>
                <h3 className="uppercase text-2xl md:text-3xl lg:text-4xl sm:max-w-2xl max-w-lg leading-snug mb-10 text-white text-center">
                    Welcome to your <br /> <span className='color-arcadia'>Library</span>
                </h3>
                
                {/* favorites list */}
                <FavoritesList />

                {/* modal msg */}
                <ModalMessage
                    open={modalOpen}
                    message={modalMessage}
                    onClose={() => setModalOpen(false)}
                />
            </div>
        </>
    )
}