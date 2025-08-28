// imports
import { useState } from 'react'

export default function Navbar() {
    // declar states
    const [isOpen, setIsOpen] = useState(false)

    // handle toggleShown Menu
    function handleShown() {
        setIsOpen(prev => !prev)
    }

    // burger icon
    const burgerIcon = (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>)

    // close icon
    const closeIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
    )

    // return render
    return (
        <>
            {/* navbar */}
            <div className="relative w-full flex justify-between items-center py-5 sm:px-10 px-4">

                {/* logotipe */}
                <h1 className="libre-regular uppercase text-[#FCE3CB]">arcadia</h1>

                {/* mobile menú button */}
                <button
                    onClick={handleShown}
                    className="block md:hidden cursor-pointer text-[#FCE3CB]">
                    {isOpen ? closeIcon : burgerIcon}
                </button>

                {/* mobile menu container */}
                {isOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[95%] sm:hidden bg-card rounded-3xl border-arcadia shadow-lg flex flex-col items-center py-6 z-50 text-[#7D4C38]">
                        <a href="#" className="libre-regular uppercase text-[#7D4C38]">about</a>
                        <a href="#" className="libre-regular uppercase text-[#7D4C38]">games</a>
                        <a href="#" className="libre-regular uppercase text-[#7D4C38]">login</a>
                        <a href="#" className="libre-regular uppercase text-[#7D4C38]">register</a>
                        <a href="#" className="libre-regular uppercase bg-[#FF6108] border-2 border-[#7D4C38] text-white text-sm rounded-full px-4 py-2 mt-2">
                            go library
                        </a>
                    </div>
                )}

                {/* desktop menú */}
                <div className='hidden md:block'>
                    <ul className='flex justify-center items-center gap-8'>
                        <li><a href="#" className='libre-regular uppercase text-white text-sm'>about</a></li>
                        <li><a href="#" className='libre-regular uppercase text-white text-sm'>games</a></li>
                        <li><a href="#" className='libre-regular uppercase text-white text-sm'>login</a></li>
                        <li><a href="#" className='libre-regular uppercase text-white text-sm'>register</a></li>
                        <li>
                            <a href="#" className='libre-regular uppercase bg-card border-arcadia text-[#7D4C38] text-xs rounded-full px-4 py-1'>
                                go library
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}