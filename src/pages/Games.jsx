export default function Games() {

    // iconSearch
    const iconSearch = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-arcadia">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
    )

    // return render
    return (
        <>
            <div className='w-full h-full flex flex-col justify-center items-center flex-1 mt-20 mb-20'>

                <h3 className="libre-regular uppercase text-2xl  md:text-3xl lg:text-4xl sm:max-w-2xl max-w-lg leading-snug mb-10 text-white text-center">
                    Explore more than <span className='color-arcadia'>+500 games</span>
                </h3>

                {/* cardlist */}
                <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-6xl">

                    {/* card */}
                    <div className="rounded-3xl bg-card flex flex-col p-2 md:p-3 border-arcadia gap-2 md:gap-3 h-auto md:h-80">

                        {/* imagen */}
                        <div className="relative rounded-2xl h-32 md:h-40 bg-[#FCCE9F] border-arcadia overflow-hidden">
                            {/* image here */}
                            <button className='cursor-pointer absolute top-2 md:top-3 right-2 md:right-3 bg-[#FF6108] h-7 w-7 md:h-9 md:w-9 border-arcadia rounded-full flex justify-center items-center hover:scale-105 transition-transform'>
                                {/* icon heart */}
                            </button>
                        </div>

                        {/* títulos */}
                        <div className="flex flex-col text-center px-1 md:px-2">
                            <h4 className="libre-bold text-sm md:text-base text-arcadia truncate">Videogame Name</h4>
                            <span className="libre-regular text-[10px] md:text-xs text-arcadia opacity-70">
                                Released 04/03/1991
                            </span>
                        </div>

                        {/* call to action */}
                        <button className='mt-auto bg-[#FF6108] px-3 py-1.5 md:px-4 md:py-2 libre-regular text-white rounded-full text-xs md:text-sm cursor-pointer leading-none hover:bg-[#e45507] transition-colors w-full md:w-auto'>
                            details
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}