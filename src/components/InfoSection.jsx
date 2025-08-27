// --> import images
import Boy2 from '../assets/images/boy2.svg'
import Decoration from '../assets/images/decorative_stars.svg'

export default function InfoSection() {

    // return render
    return (
        <>
            {/* informative section */}
            <div className='w-full flex flex-col justify-center items-center py-4 text-center px-4'>

                {/* title info */}
                <h2 className='libre-regular uppercase text-3xl text-white mb-10'>
                    how does it work?
                </h2>

                {/* container block sections */}
                <div className='w-full grid grid-cols-1 gap-8'>

                    {/* section 1 */}
                    <div className='relative col-span-full w-full border-2 border-[#7D4C38] text-[#7D4C38] rounded-3xl h-60 bg-card flex justify-center items-center p-3'>
                        <img src={Decoration} alt="decorative badge" className='absolute w-[50%] -top-5 left-1/2 -translate-x-1/2' />

                        <h3 className='libre-regular text-2xl'>
                            Add games to your personal library of favorites
                        </h3>
                    </div>

                    {/* section 2 */}
                    <div className='col-span-full w-full border-2 border-[#7D4C38] text-[#7D4C38] rounded-3xl h-60 bg-[#ECC799] flex justify-center items-center p-3'>
                        <img src={Boy2} alt="boy2" className='h-[130%]' />
                    </div>

                    {/* section 3 */}
                    <div className='col-span-full w-full border-2 border-[#7D4C38] text-[#7D4C38] rounded-3xl h-60 bg-card flex justify-center items-center p-3'>
                        <h3 className='libre-regular text-2xl'>Search and find your favorite games quickly and easily</h3>
                    </div>

                    {/* section 4 */}
                    <div className='col-span-full w-full border-2 border-[#7D4C38] text-[#7D4C38] rounded-3xl h-60 bg-[#ECC799] flex justify-center items-center p-3'>
                        <h3 className='libre-regular text-2xl'>Enjoy all features completely free of charge</h3>
                    </div>
                </div>

            </div>
        </>
    )
}