// imports
import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'
import { motion } from 'framer-motion'

export default function Navbar() {
    const { user, logout } = useAuth()
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()

    function handleShown() {
        setIsOpen(prev => !prev)
    }

    // handle logOut
    const handleLogOut = () => {
        setIsOpen(false) // si tenés menú móvil
        logout()
        navigate('/')
    }

    // close when path changes
    useEffect(() => {
        setIsOpen(false)
    }, [location.pathname])

    const burgerIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
    )

    const closeIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
    )

    return (
        <div className="relative w-full flex justify-between items-center px-4 sm:px-6 lg:px-10 py-4">

            {/* logo */}
            <NavLink to=".." className="uppercase text-[#FCE3CB] text-lg">arcadia</NavLink>

            {/* mobile menu button */}
            <button onClick={handleShown} className="block sm:hidden cursor-pointer text-[#FCE3CB]">
                {isOpen ? closeIcon : burgerIcon}
            </button>

            {/* mobile menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="w-[95%] absolute top-full left-1/2 -translate-x-1/2 sm:hidden bg-card rounded-2xl 
                    border-arcadia shadow-xl flex flex-col items-center py-6 z-50 text-[#7D4C38] px-4 gap-3">

                    {!user && (
                        <>
                            <NavLink to="/login" className={({ isActive }) =>
                                `uppercase ${isActive ? 'text-[#DB8E6B] font-semibold' : 'text-[#7D4C38] hover:text-[#DB8E6B]'}`
                            }>login</NavLink>
                            <NavLink to="/register" className={({ isActive }) =>
                                `uppercase ${isActive ? 'text-[#DB8E6B] font-semibold' : 'text-[#7D4C38] hover:text-[#DB8E6B]'}`
                            }>register</NavLink>
                        </>
                    )}

                    {user && (
                        <>
                            <NavLink to="/favorites" className={({ isActive }) =>
                                `uppercase ${isActive ? 'text-[#DB8E6B] font-semibold' : 'text-[#7D4C38] hover:text-[#DB8E6B]'}`
                            }>
                                mi biblioteca
                            </NavLink>
                            <NavLink to="/games" className={({ isActive }) =>
                                `uppercase ${isActive ? 'text-[#DB8E6B] font-semibold' : 'text-[#7D4C38] hover:text-[#DB8E6B]'}`
                            }>juegos</NavLink>
                            <NavLink to="/profile" className={({ isActive }) =>
                                `uppercase ${isActive ? 'text-[#DB8E6B] font-semibold' : 'text-[#7D4C38] hover:text-[#DB8E6B]'}`
                            }>mi perfil</NavLink>
                            <button onClick={handleLogOut} className="cursor-pointer uppercase text-[#7D4C38]">salir</button>
                        </>
                    )}
                </motion.div>
            )}

            {/* desktop menu */}
            <div className="hidden sm:block">
                <ul className="flex justify-center items-center gap-4 xl:gap-6">
                    <li>
                        <NavLink
                            to="/games"
                            className={({ isActive }) =>
                                `uppercase transition-colors duration-200 ease-in-out 
                            ${isActive ? 'text-[#DB8E6B] font-semibold' : 'text-white hover:text-[#DB8E6B]'}`
                            }>juegos</NavLink></li>

                    {!user && (
                        <>
                            <li>
                                <NavLink to="/login"
                                    className={({ isActive }) =>
                                        `uppercase transition-colors duration-200 ease-in-out 
                                    ${isActive ? 'text-[#DB8E6B] font-semibold' : 'text-white hover:text-[#DB8E6B]'}`
                                    }>login
                                </NavLink></li>
                            <li>
                                <NavLink to="/register"
                                    className={({ isActive }) =>
                                        `uppercase transition-colors duration-200 ease-in-out 
                                        ${isActive ? 'text-[#DB8E6B] font-semibold' : 'text-white hover:text-[#DB8E6B]'}`
                                    }>register
                                </NavLink></li>
                        </>
                    )}

                    {user && (
                        <>
                            <li>
                                <NavLink
                                    to="/profile"
                                    className={({ isActive }) =>
                                        `uppercase transition-colors duration-200 ease-in-out 
                                        ${isActive ? 'text-[#DB8E6B] font-semibold' : 'text-white hover:text-[#DB8E6B]'}`
                                    }>mi perfil
                                </NavLink>
                            </li>
                            <li>
                                <button onClick={logout} className="cursor-pointer uppercase text-white hover:text-[#DB8E6B]
                                 transition-colors duration-200 ease-in-out">salir</button>
                            </li>
                            <li>
                                <NavLink
                                    to="/favorites"
                                    className={({ isActive }) =>
                                        `uppercase transition-colors duration-200 ease-in-out 
                                        ${isActive ? 'text-[#DB8E6B] font-semibold' : 'text-white hover:text-[#DB8E6B]'}`
                                    }>
                                    mi biblioteca
                                </NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    )
}
