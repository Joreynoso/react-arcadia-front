// imports
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/authContext'


export default function Navbar() {
    // setup
    const { user, logout } = useAuth()
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

    // logoutButton
    const logOutButton = (
        <button 
        onClick={logout}
        className='uppercase text-white'>logout</button>
    )

    // return render
    return (
        <>
            {/* navbar */}
            <div className="relative w-full flex justify-between items-center">

                {/* logotipe */}
                <Link to=".." className="uppercase text-[#FCE3CB] text-lg">arcadia</Link>

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
                            <Link to="/profile" className="  uppercase text-[#7D4C38]">
                                my profile
                            </Link>
                        )}
                        <Link to="/games" className="uppercase text-[#7D4C38]">games</Link>
                        <Link to="/login" className="uppercase text-[#7D4C38]">login</Link>
                        <Link to="/register" className="uppercase text-[#7D4C38]">register</Link>
                        <Link to="/favorites" className="uppercase bg-[#FF6108] border-2 border-[#7D4C38] text-white text-sm rounded-full px-3 py-2 mt-2">
                            go library
                        </Link>
                    </div>
                )}

                {/* desktop menú */}
                <div className='hidden sm:block'>
                    <ul className='flex justify-center items-center gap-4 xl:gap-6'>
                        {user &&
                            (<li>
                                <Link to="/profile" className='uppercase text-white'>my profile
                                </Link>
                            </li>
                            )}
                        <li><Link to="/games" className='uppercase text-white'>games</Link></li>
                        <li><Link to="/login" className='uppercase text-white'>login</Link></li>
                        <li><Link to="/register" className='uppercase text-white'>register</Link></li>
                        <li>
                            <Link to="/favorites" className='uppercase bg-card border-arcadia text-[#7D4C38] rounded-full px-2 py-1 text-sm'>
                                go library
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}