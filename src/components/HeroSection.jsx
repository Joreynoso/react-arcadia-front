// imports
import { Link } from "react-router-dom"

export default function HeroSection() {

    // render return
    return (
        <>
            {/* hero section */}
            <div className="w-full flex flex-col min-h-screen border border-red-50">
                {/* title */}
                <div className="py-10 sm:px-10 sm:py-10 text-center sm:text-left">
                    <h3 className="uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl sm:max-w-2xl max-w-lg 
                                leading-tight text-white mb-4"> Explore <br />more than<span className='color-arcadia'>
                            <br />+500 games
                        </span>
                    </h3>

                    <Link to="/games" className="inline-block uppercase bg-card border-arcadia text-[#7D4C38] rounded-full px-4 py-2 text-sm">
                        begins adventure!
                    </Link>
                </div>

            </div>
        </>
    )
}