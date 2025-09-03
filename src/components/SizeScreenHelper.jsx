export default function SizeScreenHelper() {

    // render return
    return (
        <>
            {/* helper size screen tailwind */}
            <div className="fixed bottom-2 right-2 z-50 bg-black text-white px-3 py-1 rounded text-sm pointer-events-none select-none">
                <span className="block sm:hidden">xs</span>
                <span className="hidden sm:block md:hidden">sm</span>
                <span className="hidden md:block lg:hidden">md</span>
                <span className="hidden lg:block xl:hidden">lg</span>
                <span className="hidden xl:block 2xl:hidden">xl</span>
                <span className="hidden 2xl:block">2xl</span>
            </div>
        </>
    )
}