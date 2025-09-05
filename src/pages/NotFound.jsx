// imports
import GoBackButton from '../components/GoBackButton'

export default function NotFound() {

    // return render
    return (
        <>
            <div className="w-full flex flex-col justify-center items-center text-center">

                {/* 404 code */}
                <h2 className="  uppercase text-white mb-4 
                 text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                    404
                </h2>

                {/* subtitle */}
                <p className='  text-white mb-6 
                text-base sm:text-lg md:text-xl lg:text-2xl'>
                   ¡Ups! Parece que te respondió<br /> un gato negro
                </p>

                {/* gobackbutton */}
                <GoBackButton />
            </div>
        </>
    )
}