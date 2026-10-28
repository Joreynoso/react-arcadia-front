import { useAuth } from '../context/authContext'
import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import { Copy, Check, UserRound } from 'lucide-react'
import { useState } from 'react'

export default function Login() {
    const { login, error, loading } = useAuth()
    const navigate = useNavigate()
    const [copiedEmail, setCopiedEmail] = useState(false)
    const [copiedPass, setCopiedPass] = useState(false)

    const copyToClipboard = async (text, type) => {
        try {
            if (navigator.clipboard) {
                await navigator.clipboard.writeText(text)
            }
            if (type === 'email') {
                setCopiedEmail(true)
                setTimeout(() => setCopiedEmail(false), 1500)
            } else {
                setCopiedPass(true)
                setTimeout(() => setCopiedPass(false), 1500)
            }
        } catch (e) {}
    }

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
        <div className='w-full h-full flex flex-col justify-center items-center px-4 xl:px-0 flex-1 mt-10 mb-10 gap-4'>
            <div className='w-full sm:min-h-[400px] max-w-md rounded-2xl bg-card border-arcadia flex flex-col justify-center items-center sm:flex-row p-6 sm:p-10 md:p-10'>

                {/* form */}
                <div className='flex flex-col w-full items-start'>
                    <h3 className='text-arcadia mb-4 text-lg sm:text-xl lg:text-2xl font-semibold'>
                        Bienvenido de nuevo, <br />héroe! Continúa tu viaje.
                    </h3>

                    <form
                        onSubmit={handleSubmit(handleLogin)}
                        className='w-full flex flex-col justify-center gap-4 items-start font-semibold'>

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

            <div className='w-full max-w-md rounded-2xl bg-card border-arcadia p-4 flex flex-col gap-3 shadow-sm'>
                <div className='flex items-center gap-2 text-arcadia'>
                    <UserRound className='w-4 h-4' />
                    <span className='text-sm font-semibold'>Cuenta de prueba para explorar</span>
                </div>
                <div className='grid grid-cols-1 gap-2 text-sm'>
                    <div className='flex items-center justify-between bg-[#ECC799] px-3 py-2 rounded-full text-arcadia'>
                        <span className='truncate'>jose@gmail.com</span>
                        <button
                            type='button'
                            onClick={() => copyToClipboard('jose@gmail.com', 'email')}
                            className='flex items-center justify-center p-1.5 rounded-full bg-[#DB8E6B] text-white hover:bg-[#c77d5c] transition-colors'
                            title={copiedEmail ? 'Copiado' : 'Copiar'}
                        >
                            {copiedEmail ? <Check className='w-3.5 h-3.5' /> : <Copy className='w-3.5 h-3.5' />}
                        </button>
                    </div>
                    <div className='flex items-center justify-between bg-[#ECC799] px-3 py-2 rounded-full text-arcadia'>
                        <span>jose123</span>
                        <button
                            type='button'
                            onClick={() => copyToClipboard('jose123', 'pass')}
                            className='flex items-center justify-center p-1.5 rounded-full bg-[#DB8E6B] text-white hover:bg-[#c77d5c] transition-colors'
                            title={copiedPass ? 'Copiado' : 'Copiar'}
                        >
                            {copiedPass ? <Check className='w-3.5 h-3.5' /> : <Copy className='w-3.5 h-3.5' />}
                        </button>
                    </div>
                </div>
                <p className='text-xs text-arcadia/80 text-center'>Usa estas credenciales para probar todas las funcionalidades.</p>
            </div>
        </div>
    )
}
