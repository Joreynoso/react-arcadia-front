
export default function Navbar() {

    // burger icon
    const burgerIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>

    // return render
    return (
        <>
            {/* navbar */}
            <div className="w-full flex justify-between items-center px-3 py-4 mb-6">

                {/* logotipe */}
                <h1 className="libre-regular uppercase text-[#FCE3CB]">arcadia</h1>

                {/* mobile menú */}
                <button className="cursor-pointer text-[#FCE3CB]">
                    {burgerIcon}
                </button>
            </div>
        </>
    )
}