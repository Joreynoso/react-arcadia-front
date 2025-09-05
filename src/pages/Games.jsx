// imports
import GameSearch from "../components/GameSearch"
import GameList from "../components/GameList"
import ModalMessage from "../components/ModalMessage"
import GameToast from "../components/GameToast"

import { useFavorite } from "../context/favoriteContext"
import { useGame } from "../context/gamesContext"

export default function Games() {
    const { modalOpen, setModalOpen, modalMessage } = useFavorite()
    const { games, openToast, setOpenToast, messageToast } = useGame()

    // render return
    return (
        <div className="w-full max-w-7xl h-full flex flex-col justify-center items-center flex-1 mt-10 mb-10 mx-auto px-4 sm:px-6 lg:px-10 py-4">
            <h3 className="uppercase text-2xl md:text-3xl lg:text-4xl sm:max-w-2xl max-w-lg leading-snug mb-10 text-white text-center">
                Explora +500 de <br />
                <span className='color-arcadia'>aventuras únicas.</span>
            </h3>

            {/* modal msg */}
            <ModalMessage
                open={modalOpen}
                message={modalMessage}
                onClose={() => setModalOpen(false)}
            />

            {/* toastMessage */}
            <GameToast
                open={openToast}
                message={messageToast}
                onClose={() => setOpenToast(false)}
            />

            {/* search */}
            <GameSearch />
            
            {/* list */}
            <GameList />
        </div>
    )
}
