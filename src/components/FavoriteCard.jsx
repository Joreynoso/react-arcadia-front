// imports
import { Link } from "react-router-dom"
import GameNotImage from "./GameNotImage"

export default function FavoriteCard({ id, background_image, name, released, hasImage, onRemoveRequest }) {

    // return render
    return (
        <>
            <div className="relative rounded-xl bg-card flex flex-col p-2 md:p-3 border-arcadia gap-2 md:gap-3 h-auto md:h-72 text-center" >

                <div className="relative rounded-lg h-40 md:h-48 bg-[#FCCE9F] border-arcadia overflow-hidden">
                    {hasImage ? (
                        <img
                            src={background_image}
                            alt={name}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <GameNotImage />
                    )}
                </div>

                <div className="flex flex-col text-center px-1 md:px-2" >
                    <h4 className="text-sm md:text-base text-arcadia truncate font-semibold">{name}</h4>
                    <span className="text-[10px] md:text-xs text-arcadia opacity-70 font-semibold">
                        Lanzamiento: <br /> {released}
                    </span>
                </div>

                {/* action buttons */}
                <div className="w-full flex flex-col gap-2">
                    <Link
                        to={`/games/${id}`}
                        className='mt-auto bg-[#FF6108] px-3 py-1.5 md:px-4 md:py-2 uppercase text-white rounded-full text-xs md:text-sm cursor-pointer leading-none hover:bg-[#e45507] transition-colors w-full md:w-auto' >
                        detalle
                    </Link>

                    <button
                        onClick={onRemoveRequest}
                        className='mt-auto bg-[#FF6108] px-3 py-1.5 md:px-4 md:py-2 uppercase text-white rounded-full text-xs md:text-sm cursor-pointer leading-none hover:bg-[#e45507] transition-colors w-full md:w-auto' >
                        Quitar
                    </button>
                </div>
            </div>
        </>
    )
}