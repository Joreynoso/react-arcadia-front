// imports
import LeftCloud from '../images/leftCloud.svg'
import RigthCloud from '../images/rightCloud.svg'

export default function CloudSection() {

    // return render
    return (
        <>
            {/* clouds section */}
            <div className='relative w-full sm:min-h-[600px] min-h-[300px] flex flex-col justify-center items-center flex-1 mt-20 border border-red-200'>

                {/* title */}
                <h3 className="uppercase text-2xl md:text-3xl lg:text-4xl xl:text-5xl sm:max-w-2xl max-w-lg leading-snug text-white text-center">
                    Explore more than<span className='color-arcadia'><br />+500 games</span>
                </h3>

                <img src={LeftCloud} alt="lefCloud" className='absolute left-0 w-[30%] mt-20'/>
                <img src={RigthCloud} alt="lefCloud" className='absolute right-0 w-[30%] mb-20'/>
            </div>
        </>
    )
}