// imports
import SearchBar from "../components/SearchBar"
import GameList from "../components/GameList"
import ModalMessage from "../components/ModalMessage"
import { useFavorite } from "../context/favoriteContext"

export default function Games() {
    const { modalOpen, setModalOpen, modalMessage } = useFavorite()

    // render return
    return (
        <div className="w-full h-full flex flex-col justify-center items-center flex-1 mt-10 mb-10">
            <h3 className="uppercase text-2xl md:text-3xl lg:text-4xl sm:max-w-2xl max-w-lg leading-snug mb-10 text-white text-center">
                Explore more than <br />
                <span className="color-arcadia">+500 games</span>
            </h3>

            {/* search */}
            <SearchBar />

            {/* list */}
            <GameList />

            {/* modal msg */}
            <ModalMessage
                open={modalOpen}
                message={modalMessage}
                onClose={() => setModalOpen(false)}
            />
        </div>
    )
}
