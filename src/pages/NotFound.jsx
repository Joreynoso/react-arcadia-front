// imports
import BlackCat from '../images/blackCat.svg'

export default function NotFound() {

    // return render
    return (
        <>
            <div className='w-full h-full justify-center items-center px-4 xl:px-0 flex-1 mt-20 text-center border border-red-50'>

                <div>
                    <p className='libre-bold uppercase text-white text-9xl leading-none'>404</p>
                    <p className='libre-bold uppercase text-white text-base sm:text-lg md:text-xl'>
                        oops! seems like you got a <br /> black  cat as a response.
                    </p>
                </div>
            </div>
        </>
    )
}