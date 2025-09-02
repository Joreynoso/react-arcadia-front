// imports
import { Outlet } from "react-router-dom"
import Navbar from './Navbar'
import FooterSection from './FooterSection'

export default function Layout() {

    // return render
    return (
        <>
            <div className="relative w-full min-h-dvh flex flex-col">
                <Navbar />
                <div className='flex flex-1'>
                    <Outlet />
                </div>
                <FooterSection />
            </div>
        </>
    )
}