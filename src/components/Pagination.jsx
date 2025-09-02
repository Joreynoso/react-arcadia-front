export default function Pagination({ page, totalPages, handlePrev, handleNext }) {

    const arrowIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
    )

    // render return
    return (
        <>
            {/* navigation */}
            <div className='w-full flex justify-center items-center gap-2'>
                {/* previous page */}
                <button
                    onClick={handlePrev}
                    disabled={page <= 1}
                    className='cursor-pointer h-10 w-10 rounded-full flex justify-center items-center 
                    text-white transform scale-x-[-1] disabled:bg-gray-400 bg-[#FF6108] hover:bg-[#e45507] transition-colors'>
                    {arrowIcon}
                </button>

                {/* current page */}
                <span className='text-white font-semibold'>{page}</span>

                {/* net page */}
                <button
                    disabled={page === totalPages}
                    onClick={handleNext}
                    className='cursor-pointer h-10 w-10 rounded-full flex justify-center items-center 
                    text-white disabled:bg-gray-400 bg-[#FF6108] hover:bg-[#e45507] transition-colors'>
                    {arrowIcon}
                </button>
            </div>
        </>
    )
}