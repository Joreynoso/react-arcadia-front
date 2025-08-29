export default function Games() {

    // return render
    return (
        <>
            <div className='w-full h-full flex flex-col justify-center items-center flex-1 mt-20'>
                <h3 className="libre-regular uppercase text-2xl  md:text-3xl lg:text-4xl sm:max-w-2xl max-w-lg leading-snug mb-10 text-white text-center">
                    Explore more than <span className='color-arcadia'>+500 games</span>
                </h3>

                {/* cardlist */}
                <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">

                    {/* card */}
                    <div className="h-92 rounded-3xl bg-card flex flex-col p-4 border-arcadia">

                        <div className="relative rounded-2xl h-40 mb-2 bg-[#FCCE9F] border-arcadia">
                            {/* image here */}
                        </div>

                        {/* platforsm */}
                        <div className="logos flex gap-2 mb-4 justify-center items-center">
                            <span className="h-7 w-7 rounded-full bg-[#FAB677] border-arcadia-small"></span>
                            <span className="h-7 w-7 rounded-full bg-[#FAB677] border-arcadia-small"></span>
                            <span className="h-7 w-7 rounded-full bg-[#FAB677] border-arcadia-small"></span>
                            <span className="h-7 w-7 rounded-full bg-[#FAB677] border-arcadia-small"></span>
                            <span className="h-7 w-7 rounded-full bg-[#FAB677] border-arcadia-small"></span>
                        </div>

                        {/* titles */}
                        <div className="flex flex-col mb-2 text-center">
                            <h4 className="libre-bold text-base text-arcadia">Videogame Name</h4>
                            <span className="libre-bold text-xs text-arcadia">Released date 04/03/1991</span>
                        </div>

                        {/* call to action */}
                        <button className='bg-[#FF6108] px-4 py-2 libre-regular uppercase text-white rounded-full text-sm cursor-pointer'>
                            add to favorites
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}