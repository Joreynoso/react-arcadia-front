export default function Login() {

    // return render
    return (
        <div className='w-full h-full flex justify-center items-center px-4 xl:px-0 flex-1 mt-20'>
            <div className='w-full sm:min-h-[400px] max-w-md rounded-3xl bg-card border-arcadia flex flex-col justify-center items-center sm:flex-row p-6 sm:p-10 md:p-10'>

                {/* right form */}
                <div className='flex flex-col w-full items-start'>
                    <h3 className='libre-bold text-arcadia mb-6 text-lg sm:text-xl lg:text-2xl'>
                        Welcome back, hero! Continue your journey.
                    </h3>

                    <form className='w-full flex flex-col justify-center gap-6 libre-regular items-start'>
                        <input 
                        placeholder='Type your email...' 
                        type="email" 
                        className='w-full bg-[#ECC799] px-4 py-2 rounded-full text-arcadia'
                         />

                        <input 
                        placeholder='Type your password...' 
                        type="password" 
                        className='w-full bg-[#ECC799] px-4 py-2 rounded-full text-arcadia' />

                        <button className='bg-[#FF6108] px-4 py-2 libre-regular uppercase text-white rounded-full text-sm cursor-pointer'>
                            begins adventure
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
