// imports
import BlackCat from '../images/blackCat.svg'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    // navigate
    const navigate = useNavigate()

    // return render
    return (
        <>
            <div className="w-full flex flex-col justify-center items-center text-center">

                {/* 404 code */}
                <h2 className="libre-bold uppercase text-white mb-4 
                 text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                    404
                </h2>

                {/* subtitle */}
                <p className='libre-regular text-white mb-6 
                text-base sm:text-lg md:text-xl lg:text-2xl'>
                    Oops! seems like you got a <br /> black cat as a response.
                </p>

                {/* go back button */}
                <button
                    onClick={() => navigate(-1)}
                    className="w-40 bg-card border-arcadia text-arcadia libre-bold uppercase text-sm px-4 py-2 rounded-full font-semibold">
                    go back
                </button>
            </div>
        </>
    )
}