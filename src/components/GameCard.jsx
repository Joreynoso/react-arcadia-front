// import
import { useNavigate, Link } from "react-router-dom"

export default function GameCard({ id, background_image, name, released }) {
    // navigate
    const navigate = useNavigate()

    // return render
    return (
        <>
            <div
                className="rounded-2xl bg-card flex flex-col p-2 md:p-3 border-arcadia gap-2 md:gap-3 h-auto md:h-72 text-center" >

                <div className="relative rounded-xl h-38 md:h-40 bg-[#FCCE9F] border-arcadia overflow-hidden" >
                    <img src={background_image} alt={name} className="w-full h-full bg-center bg-cover"/>

                    <button
                        className='cursor-pointer absolute top-2 md:top-3 right-2 md:right-3 bg-[#FF6108] 
                        h-7 w-7 md:h-9 md:w-9 border-arcadia rounded-full flex justify-center items-center 
                        hover:scale-105 transition-transform uppercase text-white text-sm font-semibold' >
                        ai
                    </button >
                </div >

                <div className="flex flex-col text-center px-1 md:px-2" >
                    <h4 className="text-sm md:text-base text-arcadia truncate font-semibold">{name}</h4>
                    <span className="text-[10px] md:text-xs text-arcadia opacity-70 font-semibold">
                        Released {released}
                    </span>
                </div >

                <Link 
                className='mt-auto bg-[#FF6108] px-3 py-1.5 md:px-4 md:py-2   text-white rounded-full text-xs md:text-sm cursor-pointer leading-none hover:bg-[#e45507] transition-colors w-full md:w-auto' >
                    details
                </Link >
            </div >
        </>
    )
}