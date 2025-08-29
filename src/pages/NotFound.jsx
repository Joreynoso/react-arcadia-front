// imports
import GoBackButton from '../components/GoBackButton'

export default function NotFound() {

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

                {/* gobackbutton */}
                <GoBackButton />
            </div>
        </>
    )
}