import { useAuth } from '../context/authContext'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {

    // states
    const { error, loading, register } = useAuth()
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // navigate
    const navigate = useNavigate()

    // handleRegister
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await register({ email, username, password })

        if (response) {
            console.log('Registro exitoso', response)
            navigate('/games')
            // mostrar toastify o mensaje personalizado
        }
    }

    // return render
    return (
        <div className='w-full h-full flex justify-center items-center px-4 xl:px-0 flex-1 mt-20'>
            <div className='w-full sm:min-h-[400px] max-w-md rounded-3xl bg-card border-arcadia flex flex-col justify-center items-center sm:flex-row p-6 sm:p-10 md:p-10'>

                {/* right form */}
                <div className='flex flex-col w-full items-start'>
                    <h3 className='libre-bold text-arcadia mb-6 text-lg sm:text-xl lg:text-2xl'>
                        Begin your quest! Create your game library.
                    </h3>

                    <form
                        onSubmit={handleSubmit}
                        className='w-full flex flex-col justify-center gap-6 libre-regular items-start'>

                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Type your email...'
                            type="email"
                            className='w-full bg-[#ECC799] px-4 py-2 rounded-full text-arcadia'
                        />

                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder='Type your username...'
                            type="text"
                            className='w-full bg-[#ECC799] px-4 py-2 rounded-full text-arcadia'
                        />

                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Type your password...'
                            type="password"
                            className='w-full bg-[#ECC799] px-4 py-2 rounded-full text-arcadia' />

                        <button
                            type='submit' disabled={loading}
                            className='bg-[#FF6108] px-4 py-2 libre-regular uppercase text-white rounded-full text-sm cursor-pointer'>
                            begins adventure
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}