// imports
import LeftCloud from '../images/leftCloud.svg'
import RightCloud from '../images/rightCloud.svg'
import { Link } from 'react-router-dom'

export default function CloudSection() {
    return (
        <section className="relative w-full min-h-[400px] sm:min-h-[700px] flex flex-col justify-center items-center mt-20 overflow-visible">

            {/* title */}
            <h3 className="uppercase text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-lg sm:max-w-2xl
             text-white text-center leading-snug z-10 mb-4">
                Explore more than
                <span className="color-arcadia">
                    <br />+500 games
                </span>
            </h3>

            {/* clouds */}
            <img
                src={LeftCloud}
                alt="left cloud"
                className="absolute left-0 top-1/2 -translate-y-1/2 w-[40%] sm:w-[35%] h-auto"
            />
            <img
                src={RightCloud}
                alt="right cloud"
                className="absolute right-0 top-1/2 -translate-y-1/2 w-[40%] sm:w-[35%] h-auto"
            />

            <Link to="/games" className="inline-block uppercase bg-card border-arcadia text-[#7D4C38] rounded-full px-4 py-2 text-sm">
                discover games!
            </Link>

        </section>
    )
}
