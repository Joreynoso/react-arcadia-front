// imports
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/authContext'

export default function Navbar() {
    // declar states
    const [isOpen, setIsOpen] = useState(false)

    // usecontext to get user
    const { user } = useAuth()

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
            <div className="relative w-full flex justify-between items-center">

                {/* logotipe */}
                <Link to=".." className="libre-regular uppercase text-[#FCE3CB]">arcadia</Link>

                {/* mobile menú button */}
                <button
                    onClick={handleShown}
                    className="block sm:hidden cursor-pointer text-[#FCE3CB]">
                    {isOpen ? closeIcon : burgerIcon}
                </button>

                {/* mobile menu container */}
                {isOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[95%] sm:hidden bg-card rounded-3xl border-arcadia shadow-lg flex flex-col items-center py-6 z-50 text-[#7D4C38]">
                        {user && (
                            <Link to="/profile" className="libre-regular uppercase text-[#7D4C38]">
                                {user.username}
                            </Link>
                        )}
                        <Link to="/games" className="libre-regular uppercase text-[#7D4C38]">games</Link>
                        <Link to="/login" className="libre-regular uppercase text-[#7D4C38]">login</Link>
                        <Link to="/register" className="libre-regular uppercase text-[#7D4C38]">register</Link>
                        <Link to="/favorites" className="libre-regular uppercase bg-[#FF6108] border-2 border-[#7D4C38] text-white text-sm rounded-full px-4 py-2 mt-2">
                            go library
                        </Link>
                    </div>
                )}

                {/* desktop menú */}
                <div className='hidden sm:block'>
                    <ul className='flex justify-center items-center gap-6 xl:gap-8'>
                        {user &&
                            (<li>
                                <Link to="/profile" className='libre-regular uppercase text-white text-sm'>{user.username}
                                </Link>
                            </li>
                            )}
                        <li><Link to="/games" className='libre-regular uppercase text-white text-sm'>games</Link></li>
                        <li><Link to="/login" className='libre-regular uppercase text-white text-sm'>login</Link></li>
                        <li><Link to="/register" className='libre-regular uppercase text-white text-sm'>register</Link></li>
                        <li>
                            <Link to="/favorites" className='libre-regular uppercase bg-card border-arcadia text-[#7D4C38] text-xs rounded-full px-4 py-1'>
                                go library
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}