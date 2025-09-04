// imports
import { NavLink, Outlet } from "react-router-dom"

export default function Dashboard() {

    // return render
    return (
        <>
            <div className="w-full max-w-7xl flex flex-col items-center flex-1 mt-10 mb-10 px-4 mx-auto">
                <h3 className="uppercase text-2xl md:text-3xl lg:text-4xl sm:max-w-2xl max-w-lg leading-snug text-white text-center mb-10">
                    panel <span className='color-arcadia'>admin</span>
                </h3>

                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-arcadia mb-4">
                    <NavLink
                        to="/dashboard/users"
                        className={({ isActive }) =>
                            `rounded-full px-3 py-2 border-arcadia transition uppercase 
            ${isActive ? "bg-[#FF6108] text-white" : "bg-card"}`
                        }
                    >
                        users
                    </NavLink>

                    <NavLink
                        to="/dashboard/roles"
                        className={({ isActive }) =>
                            `rounded-full px-3 py-2 border-arcadia transition uppercase 
            ${isActive ? "bg-[#FF6108] text-white" : "bg-card"}`
                        }
                    >
                        roles
                    </NavLink>

                    <NavLink
                        to="/dashboard/permissions"
                        className={({ isActive }) =>
                            `rounded-full px-3 py-2 border-arcadia transition uppercase 
            ${isActive ? "bg-[#FF6108] text-white" : "bg-card"}`
                        }
                    >
                        permissions
                    </NavLink>

                    <NavLink
                        to="/dashboard/games"
                        className={({ isActive }) =>
                            `rounded-full px-3 py-2 border-arcadia transition uppercase 
            ${isActive ? "bg-[#FF6108] text-white" : "bg-card"}`
                        }
                    >
                        games
                    </NavLink>
                </div>

                <Outlet />

            </div>
        </>
    )
}