import { useAuth } from '../context/authContext'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const { login, error, loading } = useAuth()
    const navigate = useNavigate()

    // useForm hook desctructuring
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onChange' })

    // handleSubmit
    const handleLogin = async (data) => {
        const response = await login(data) // data = { email: "...", password: "..." }

        console.log(response)

        if (response) {
            console.log('Login exitoso', response)
            navigate('/games')
        }
    }

    // validation rules
    const emailRules = {
        required: "email is required",
        pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "invalid email"
        }
    }

    // style validations
    const styleValidations = "ml-2 text-xs italic text-red-600 font-semibold leading-tigth"

    return (
        <div className='w-full h-full flex justify-center items-center px-4 xl:px-0 flex-1 mt-10 mb-10'>
            <div className='w-full sm:min-h-[400px] max-w-md rounded-2xl bg-card border-arcadia flex flex-col justify-center items-center sm:flex-row p-6 sm:p-10 md:p-10'>

                {/* right form */}
                <div className='flex flex-col w-full items-start'>
                    <h3 className='text-arcadia mb-6 text-lg sm:text-xl lg:text-2xl font-semibold'>
                        Welcome back, hero! <br />Continue bryour journey.
                    </h3>

                    <form
                        onSubmit={handleSubmit(handleLogin)}
                        className='w-full flex flex-col justify-center gap-5 items-start font-semibold'>

                        {/* email */}
                        <div className='w-full'>
                            <input
                                {...register("email", emailRules)}
                                placeholder='Type your email...'
                                type="email"
                                className='w-full bg-[#ECC799] px-4 py-2 rounded-full text-arcadia mb-2
                            focus:outline-none focus:ring-2 focus:ring-[#A6755A]'
                            />
                            {errors.email && <p className={styleValidations}>{errors.email.message}</p>}
                        </div>

                        {/* password */}
                        <div className='w-full'>
                            <input
                                {...register('password', { required: 'password is required' })}
                                placeholder='Type your password...'
                                type="password"
                                className='w-full bg-[#ECC799] px-4 py-2 rounded-full text-arcadia mb-2
                            focus:outline-none focus:ring-2 focus:ring-[#A6755A]'
                            />
                            {errors.password && <p className={styleValidations}>{errors.password.message}</p>}
                        </div>

                        <button
                            type='submit'
                            disabled={loading}
                            className='bg-[#FF6108] px-4 py-2   uppercase text-white rounded-full text-sm cursor-pointer'
                        >
                            {loading ? 'Authenticating...' : 'Begins adventure'}
                        </button>

                        {error && <span className="text-red-600">{error}</span>}
                    </form>
                </div>
            </div>
        </div>
    )
}
