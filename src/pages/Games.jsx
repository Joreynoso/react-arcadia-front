// import
import GameList from "../components/GameList"

export default function Games() {
    return (
        <>
            <div className='w-full h-full flex flex-col justify-center items-center flex-1 mt-20 mb-20'>
                <h3 className="uppercase text-2xl md:text-3xl lg:text-4xl sm:max-w-2xl max-w-lg leading-snug mb-10 text-white text-center">
                    Explore more than <span className='color-arcadia'>+500 games</span>
                </h3>
                <GameList />
                {/* <Modal/> */}
            </div>
            
        </>
    )
}