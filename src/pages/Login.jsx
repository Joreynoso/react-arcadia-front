import { useAuth } from '../context/authContext'
import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'

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
            navigate('/')
        }
    }

    // validation rules
    const emailRules = {
        required: "El email es obligatorio",
        pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Email incorrecto"
        }
    }

    // style validations
    const styleValidations = "ml-2 text-xs italic text-red-600 font-semibold leading-tigth"

    return (
        <div className='w-full h-full flex justify-center items-center px-4 xl:px-0 flex-1 mt-10 mb-10'>
            <div className='w-full sm:min-h-[400px] max-w-md rounded-2xl bg-card border-arcadia flex flex-col justify-center items-center sm:flex-row p-6 sm:p-10 md:p-10'>

                {/* form */}
                <div className='flex flex-col w-full items-start'>
                    <h3 className='text-arcadia mb-4 text-lg sm:text-xl lg:text-2xl font-semibold'>
                        Bienvenido de nuevo, <br />héroe! Continúa tu viaje.
                    </h3>

                    <form
                        onSubmit={handleSubmit(handleLogin)}
                        className='w-full flex flex-col justify-center gap-4 items-start font-semibold'>

                        <div className='w-full bg-[#FCCE9F]/70 border-arcadia rounded-xl p-3 flex flex-col gap-1 text-xs text-arcadia'>
                            <span className='font-semibold'>Cuenta de prueba</span>
                            <div className='flex flex-wrap gap-2 items-center'>
                                <span>jose@gmail.com</span>
                                <button type='button' onClick={() => { try { if (navigator.clipboard) navigator.clipboard.writeText('jose@gmail.com') } catch(e){} }} className='px-2 py-0.5 rounded-full bg-[#DB8E6B] text-white hover:bg-[#c77d5c] transition-colors'>Copiar email</button>
                                <span className='w-full'>Contraseña: jose123</span>
                                <button type='button' onClick={() => { try { if (navigator.clipboard) navigator.clipboard.writeText('jose123') } catch(e){} }} className='px-2 py-0.5 rounded-full bg-[#DB8E6B] text-white hover:bg-[#c77d5c] transition-colors'>Copiar contraseña</button>
                            </div>
                        </div>

                        {/* email */}
                        <div className='w-full'>
                            <input
                                {...register("email", emailRules)}
                                placeholder='Escribe tu email...'
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
                                placeholder='Escribe tu contraseña...'
                                type="password"
                                className='w-full bg-[#ECC799] px-4 py-2 rounded-full text-arcadia mb-2
                            focus:outline-none focus:ring-2 focus:ring-[#A6755A]'
                            />
                            {errors.password && <p className={styleValidations}>{errors.password.message}</p>}
                        </div>

                        <button
                            type='submit'
                            disabled={loading}
                            className='bg-[#FF6108] px-4 py-2 uppercase text-white rounded-full text-sm cursor-pointer hover:bg-[#e45507] transition-colors'
                        >
                            {loading ? 'Autenticando...' : 'Comenzar Aventura'}
                        </button>

                        {error && <span className="text-red-600">{error}</span>}

                        <p className="text-center text-sm text-arcadia">
                            No tienes una cuenta aún?{" "}
                            <Link
                                to="/register"
                                className="font-medium text-arcadia hover:underline"
                            >
                                Registrarme
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}
