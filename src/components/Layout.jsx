// imports
import { Outlet } from "react-router-dom"
import Navbar from './Navbar'
import FooterSection from './FooterSection'

export default function Layout() {

    // return render
    return (
        <>
            <div className="w-full min-h-screen">
                <Navbar />
                <Outlet />
                <FooterSection />
            </div>
        </>
    )
}