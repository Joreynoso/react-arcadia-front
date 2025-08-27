// --> import images
import Boy from '../assets/images/boy.svg'
import Cloud1 from '../assets/images/cloud_1.svg'
import Cloud2 from '../assets/images/cloud_2.svg'
import LeftCloud from '../assets/images/left_cloud.svg'
import RightCloud from '../assets/images/rigth_cloud.svg'

export default function HeroSection() {

    // return render
    return (
        <>

            {/* hero section */}
            <div className="relative w-full h-[650px] mb-10">

                {/* content */}
                <div className="relative text-center sm:text-left z-20">
                    {/* title */}
                    <h2 className="uppercase text-white libre-regular text-4xl leading-tight mb-2">
                        explore
                        <br />more than
                        <br /><span className="text-[#FCE3CB]">+500 games</span>
                    </h2>

                    {/* call to action */}
                    <button className="cursor-pointer bg-card libre-bold text-sm uppercase w-auto px-4 py-2 bg-white rounded-full border-2 border-[#7D4C38] text-[#7D4C38]">
                        Find games
                    </button>
                </div>

                {/* decorative images */}
                <img src={Cloud1} alt="cloud 1" className="absolute top-56 left-34 w-[55%] z-10" />
                <img src={Boy} alt="boy" className="absolute top-72 left-4 w-[90%] z-20" />
                <img src={Cloud2} alt="cloud 2" className="absolute top-[65%] left-10 w-[45%] z-20" />
                <img src={RightCloud} alt="right cloud" className="absolute bottom-5 right-0 w-[60%] z-20" />
                <img src={LeftCloud} alt="left cloud" className="absolute bottom-0 left-0 w-[50%] z-0" />

            </div>
        </>
    )
}