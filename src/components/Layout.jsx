// imports
import { Outlet } from "react-router-dom"
import Navbar from './Navbar'
import FooterSection from './FooterSection'
import SizeScreenHelper from "./SizeScreenHelper"
import MusicPlayer from "./MusicPlayer"

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
                {/* <SizeScreenHelper/> */}

                <MusicPlayer />
            </div>
        </>
    )
}