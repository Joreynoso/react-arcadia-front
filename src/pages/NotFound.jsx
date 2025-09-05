import GoBackButton from '../components/GoBackButton'

export default function NotFound() {
    return (
        <div className="w-full flex flex-col justify-center items-center text-center">

            {/* contenedor relativo para apilar */}
            <div className="relative flex justify-center items-center">

                {/* 404 code - atrás */}
                <p className="absolute inset-0 flex justify-center items-center 
          text-white 
          text-[150px] sm:text-[200px] md:text-[250px] font-bold">
                    404
                </p>

                {/* svg - delante */}
                <img
                    src="/images/404cat.svg"
                    alt="404 cat"
                    className="relative w-36 sm:w-50 md:w-62"
                />
            </div>

            {/* subtitle */}
            <p className="text-white mb-6 mt-6
        text-base sm:text-lg md:text-xl lg:text-2xl">
                ¡Ups! Parece que te respondió<br /> un gato negro
            </p>

            {/* gobackbutton */}
            <GoBackButton />
        </div>
    )
}
