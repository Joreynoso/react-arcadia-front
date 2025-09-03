// imports
import { Link } from "react-router-dom"

import Boy from '../images/boy.svg'
import LeftCloud from '../images/leftCloud.svg'
import RigthCloud from '../images/rightCloud.svg'
import TopCloud from '../images/topCloud.svg'
import MidCloud from '../images/midCloud.svg'

export default function HeroSection() {

    // render return
    return (
        <>
            {/* hero section */}
            <div className="relative w-full flex flex-col min-h-[calc(100vh-60px)]">
                {/* title */}
                <div className="py-10 sm:px-10 sm:py-10 text-center flex flex-col justify-center items-center">
                    <h3 className="uppercase text-3xl sm:text-4xl md:text-5xl sm:max-w-2xl max-w-lg 
                                leading-tight text-white mb-4"> Explore more <br />than<span className='color-arcadia'>+500 games
                        </span>
                    </h3>

                    <Link to="/games" className="inline-block uppercase bg-card border-arcadia text-[#7D4C38] rounded-full px-4 py-2 text-sm">
                        begins adventure!
                    </Link>
                </div>

                <div class="fixed bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded z-[9999]
            before:content-['xs'] sm:before:content-['sm'] md:before:content-['md'] 
            lg:before:content-['lg'] xl:before:content-['xl'] 2xl:before:content-['2xl']">
                </div>

                {/* boy */}
                <img src={Boy} alt="boy"
                    className='
                        absolute
                        left-1/2 -translate-x-1/2
                        w-[80%] sm:w-[60%] md:w-[50%] lg:w-[45%]
                        top-[30%]'/>

                {/* left cloud */}
                <img src={LeftCloud} alt="leftCloud"
                    className='
                absolute left-0
                w-[50%] sm:w-[45%] md:w-[40%] lg:w-[35%]
                top-[55%] sm:top-[40%] md:top-[25%]'/>

                {/* rigth cloud */}
                <img src={RigthCloud} alt="rightCloud"
                    className='
                absolute right-0
                w-[40%] sm:w-[45%] md:w-[40%] lg:w-[35%]
                top-[45%] sm:top-[40%] md:top-[25%]'/>

                {/* top cloud */}
                <img src={TopCloud} alt="topCloud"
                    className='
                absolute
                top-[23%]
                right-[15%] 
                w-[50%] sm:w-[40%] lg:w-[25%]'/>

                {/* mid cloud */}
                <img src={MidCloud} alt="midCloud" 
                className='absolute
                top-[48%] md:top-[50%] lg:top-[60%] xl:top-[70%]
                left-1/2 -translate-x-1/2
                w-[40%] sm:w-[30%] lg:w-[25%]' />
            </div>
        </>
    )
}