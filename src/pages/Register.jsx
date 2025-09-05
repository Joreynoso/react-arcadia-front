import { useAuth } from '../context/authContext'
import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'


export default function Register() {
    const { error, loading, register: registerUser } = useAuth()
    const navigate = useNavigate()

    // useForm hook destructuring
    const {
        register: registerField,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onChange' })

    // validation rules
    const emailRules = {
        required: "Email is required",
        pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email"
        }
    }

    const usernameRules = {
        required: "El usuario es oblitarorio",
        minLength: {
            value: 3,
            message: "Debe tener al menos 3 caracteres"
        }
    }

    const passwordRules = {
        required: "La contraseña es oblitaroria",
        minLength: {
            value: 6,
            message: "La contraseña debe tener al menos 6 caracteres"
        }
    }

    const styleValidations = "ml-2 text-xs italic text-red-600 font-semibold leading-tight"

    // handle form submit
    const handleRegister = async (data) => {
        const response = await registerUser(data) // data = { email, username, password }

        if (response) {
            console.log('Registro exitoso', response)
            navigate('/login')
        }
    }

    return (
        <div className='w-full h-full flex justify-center items-center px-4 xl:px-0 flex-1 mt-10 mb-10'>
            <div className='w-full sm:min-h-[400px] max-w-md rounded-2xl bg-card border-arcadia flex flex-col justify-center items-center sm:flex-row p-6 sm:p-10 md:p-10'>

                <div className='flex flex-col w-full items-start'>
                    <h3 className='text-arcadia mb-6 text-lg sm:text-xl lg:text-2xl font-semibold'>
                        ¡Empieza tu misión! Crea <br /> tu biblioteca de juegos.
                    </h3>

                    <form
                        onSubmit={handleSubmit(handleRegister)}
                        className='w-full flex flex-col justify-center gap-5 items-start font-semibold'>

                        {/* email */}
                        <div className='w-full'>
                            <input
                                placeholder='Escribe tu email...'
                                {...registerField("email", emailRules)}
                                type="email"
                                className='w-full bg-[#ECC799] px-4 py-2 rounded-full text-arcadia
                                focus:outline-none focus:ring-2 focus:ring-[#A6755A] mb-2'
                            />
                            {errors.email && <p className={styleValidations}>{errors.email.message}</p>}
                        </div>

                        {/* username */}
                        <div className='w-full'>
                            <input
                                placeholder='Crea un nombre de usuario...'
                                {...registerField("username", usernameRules)}
                                type="text"
                                className='w-full bg-[#ECC799] px-4 py-2 rounded-full text-arcadia
                                focus:outline-none focus:ring-2 focus:ring-[#A6755A] mb-2'
                            />
                            {errors.username && <p className={styleValidations}>{errors.username.message}</p>}
                        </div>

                        {/* password */}
                        <div className='w-full'>
                            <input
                                placeholder='Crea una contraseña...'
                                {...registerField("password", passwordRules)}
                                type="password"
                                className='w-full bg-[#ECC799] px-4 py-2 rounded-full text-arcadia
                                focus:outline-none focus:ring-2 focus:ring-[#A6755A] mb-2'
                            />
                            {errors.password && <p className={styleValidations}>{errors.password.message}</p>}
                        </div>

                        {/* submit button */}
                        <button
                            type='submit'
                            disabled={loading}
                            className='bg-[#FF6108] px-4 py-2 uppercase text-white rounded-full text-sm cursor-pointer'>
                            {loading ? 'Creando nuevo usuario...' : 'Comenzar viaje!'}
                        </button>

                        {error && <span className="text-red-500">{error}</span>}

                        <p className="text-center text-sm text-arcadia">
                             Tienes una cuenta ya?{" "}
                            <Link
                                to="/login"
                                className="font-medium text-arcadia hover:underline"
                            >
                                Iniciar sesión
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}
