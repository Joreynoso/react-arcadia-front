//imports
import { useParams } from "react-router-dom"
export default function GameDetail() {

    // setup
    const { id } = useParams()

    // return render
    return (
        <>
            <div className="w-full h-full flex flex-col justify-center items-center flex-1 mt-20 mb-20">
                <h3 className="uppercase text-2xl md:text-3xl lg:text-4xl sm:max-w-2xl max-w-lg leading-snug mb-10 text-white text-center">
                    Game detail of <span className='color-arcadia'>Video Game Name</span>
                </h3>
            </div>
        </>
    )

}