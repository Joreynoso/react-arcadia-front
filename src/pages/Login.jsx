import { useAuth } from '../context/authContext'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const { login, error, loading } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await login({ email, password })

        console.log(response)

        if (response) {
            console.log('Login exitoso', response)
            navigate('/games')
            // mostrar toastify o mensaje personalizado
        }
    }

    return (
        <div className='w-full h-full flex justify-center items-center px-4 xl:px-0 flex-1 mt-20'>
            <div className='w-full sm:min-h-[400px] max-w-md rounded-3xl bg-card border-arcadia flex flex-col justify-center items-center sm:flex-row p-6 sm:p-10 md:p-10'>


                {/* right form */}
                <div className='flex flex-col w-full items-start'>
                    <h3 className='text-arcadia mb-6 text-lg sm:text-xl lg:text-2xl font-semibold'>
                        Welcome back, hero! <br />Continue bryour journey.
                    </h3>

                    <form
                        onSubmit={handleSubmit}
                        className='w-full flex flex-col justify-center gap-6 items-start font-semibold'>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Type your email...'
                            type="email"
                            className='w-full bg-[#ECC799] px-4 py-2 rounded-full text-arcadia'
                        />

                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Type your password...'
                            type="password"
                            className='w-full bg-[#ECC799] px-4 py-2 rounded-full text-arcadia'
                        />

                        <button
                            type='submit'
                            disabled={loading}
                            className='bg-[#FF6108] px-4 py-2   uppercase text-white rounded-full text-sm cursor-pointer'
                        >
                            begins adventure
                        </button>

                        {error && <span className="text-red-500">{error}</span>}
                    </form>
                </div>
            </div>
        </div>
    )
}
