//imports
import GoBackButton from '../components/GoBackButton'

export default function GameUpdate() {

    return (
        <>
            <div className="w-full max-w-7xl h-full flex flex-col justify-center items-center flex-1 mt-10 mb-10 mx-auto px-4 sm:px-6 lg:px-10 py-4">
                <h3 className="uppercase text-2xl md:text-3xl lg:text-4xl sm:max-w-2xl max-w-lg leading-snug text-white text-center mb-10">
                    upadte a<br /> <span className='color-arcadia'>game</span>
                </h3>

                <GoBackButton />
            </div>
        </>
    )
}
