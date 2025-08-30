// imports
import InfoBoy from '../images/InfoBoy.svg'
import InfoSword from '../images/infoSword.svg'
import InfoShield from '../images/infoShield.svg'
import InfoDoubleSword from '../images/infoDoubleSword.svg'

export default function InfoSection() {

    // iconStar
    const iconStar = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-[#FFDA07]">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
        </svg>
    )

    // return render
    return (
        <>
            {/* informative section */}
            <div className='w-full h-full flex flex-col justify-center items-center flex-1 mt-20'>

                {/* title */}
                <h3 className="  uppercase text-2xl md:text-3xl lg:text-4xl sm:max-w-2xl max-w-lg leading-snug mb-10 text-white text-center">
                    Your Quest to Build the <span className='color-arcadia'>Ultimate Library</span>
                </h3>

                {/* grid section */}
                <div className='w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6'>

                    {/* block 1 */}
                    <div className='flex flex-col bg-card rounded-3xl border-arcadia h-60 md:col-span-1 xl:col-span-3 justify-center items-center text-center'>
                        <h4 className='text-arcadia   leading-tight text-xl max-w-[70%] mb-4'>
                            Save your favorite games to your library and access them anytime you want.
                        </h4>

                        <span className='bg-[#DB8E6B] border-arcadia px-4 py-2 rounded-full flex gap-2'>
                            {iconStar} {iconStar} {iconStar}
                        </span>
                    </div>

                    {/* block 2 */}
                    <div className='flex justify-center items-center bg-[#FCCE9F] rounded-3xl border-arcadia h-60 md:col-span-1 xl:col-span-2'>
                        <img src={InfoBoy} alt="infoBoy" className='h-[125%]' />
                    </div>

                    {/* block 3 */}
                    <div className='flex flex-col justify-center items-center text-center bg-[#FCCE9F] rounded-3xl border-arcadia h-60 md:col-span-1 xl:col-span-2'>
                        <h4 className='text-arcadia   leading-tight text-xl max-w-[70%] mb-4'>
                            Easily search through your library and find the games you love.
                        </h4>
                        <span className='bg-[#DB8E6B] border-arcadia px-4 py-2 rounded-full flex gap-2'>
                            <img src={InfoShield} alt="infoshield" className='size-6' />
                            <img src={InfoDoubleSword} alt="InfoDoubleSword" className='size-6' />
                            <img src={InfoSword} alt="InfoSword" className='size-6' />
                        </span>
                    </div>

                    {/* block 4 */}
                    <div className='flex flex-col justify-center items-center text-center bg-card rounded-3xl border-arcadia h-60 md:col-span-1 xl:col-span-3'>
                        <h4 className='text-arcadia   leading-tight text-xl max-w-[70%] mb-4'>
                            Discover new adventures and never miss a game worth playing.
                        </h4>
                        <span className='bg-[#DB8E6B] border-arcadia px-4 py-2 rounded-full flex gap-2'>
                            {iconStar} {iconStar} {iconStar} {iconStar} {iconStar}
                        </span>
                    </div>
                </div>
            </div>

        </>
    )
}