// import
import GameList from "../components/GameList"

export default function Games() {
    const iconSearch = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-arcadia">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
    )

    // return render
    return (
        <>
            <div className='w-full h-full flex flex-col justify-center items-center flex-1 mt-20 mb-20'>

                <h3 className="uppercase text-2xl md:text-3xl lg:text-4xl sm:max-w-2xl max-w-lg leading-snug mb-10 text-white text-center">
                    Explore more than <span className='color-arcadia'>+500 games</span>
                </h3>
                
                <GameList />

            </div>
        </>
    )
}