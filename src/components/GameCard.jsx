// imports
import { Link } from 'react-router-dom'
import { useFavorite } from '../context/favoriteContext'

export default function GameCard({ id, background_image, name, released }) {
    const { loading, favorites, addFavorite, removeFavorite } = useFavorite()

    const isFavorite = Array.isArray(favorites) && favorites.some(fav => fav.game._id == id)

    // handle add or remove
    const handleAdd = async () => {
        try {
            await addFavorite(id)
        } catch (err) {
            console.error(err)
        }
    }

    const handleRemove = async () => {
        try {
            await removeFavorite(id)
        } catch (err) {
            console.error(err)
        }
    }

    const iconStar = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 sm:size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
    )

    const iconStarFilled = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 sm:size-5">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
        </svg>
    )

    // return render
    return (
        <>
            <div className="relative rounded-xl bg-card flex flex-col p-2 md:p-3 border-arcadia gap-2 md:gap-3 h-auto md:h-72 text-center" >

                <div className="relative rounded-lg h-40 md:h-48 bg-[#FCCE9F] border-arcadia overflow-hidden">
                    <img
                        src={background_image}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex flex-col text-center px-1 md:px-2" >
                    <h4 className="text-sm md:text-base text-arcadia truncate font-semibold">{name}</h4>
                    <span className="text-[10px] md:text-xs text-arcadia opacity-70 font-semibold">
                        Released {released}
                    </span>
                </div>

                <Link
                    to={`/games/${id}`}
                    className='mt-auto bg-[#FF6108] px-3 py-1.5 md:px-4 md:py-2 uppercase text-white rounded-full text-xs md:text-sm cursor-pointer leading-none hover:bg-[#e45507] transition-colors w-full md:w-auto' >
                    details
                </Link>

                {!isFavorite && (
                    <button
                        disabled={loading}
                        onClick={handleAdd}
                        className="absolute top-5 right-5 bg-[#FF6108] cursor-pointer text-white w-6 sm:w-8 h-6 sm:h-8 rounded-full flex justify-center items-center hover:bg-[#e45507] transition-colors"
                    >
                        {iconStar}
                    </button>
                )}

                {isFavorite && (
                    <button
                        disabled={loading}
                        onClick={handleRemove}
                        className="absolute top-5 right-5 bg-[#FF6108] cursor-pointer text-white w-6 sm:w-8 h-6 sm:h-8 rounded-full flex justify-center items-center hover:bg-[#e45507] transition-colors"
                    >
                        {iconStarFilled}
                    </button>
                )}
            </div>
        </>
    )
}