//imports
import GoBackButton from '../components/GoBackButton'
import ErrorCard from '../components/ErrorCard'
import LoadingCard from '../components/LoadingCard'

import { useGame } from '../context/gamesContext'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

export default function GameUpdate() {
    const [currentGame, setCurrentGame] = useState(null)
    const { error, loading, games, updateGame } = useGame()
    const [redirecting, setRedirecting] = useState(false)
    const { id } = useParams()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({ mode: 'onChange' })

    useEffect(() => {
        const gameFound = games.find(game => game._id === id)
        if (gameFound) {
            reset({
                ...gameFound,
                platforms: gameFound.platforms.join(', '),
                genres: gameFound.genres.join(', ')
            })

            setCurrentGame(gameFound)
        }
    }, [id, games, reset])

    // condicional rendering
    if (loading) return <LoadingCard />
    if (error) return <ErrorCard message={error} />

    // 🚨 validar si no existe el juego
    if (!currentGame) {
        return <ErrorCard message="El juego no fue encontrado" />
    }

    async function handleUpdate(data) {
        try {
            const payload = {
                ...data,
                platforms: data.platforms
                    .split(',')
                    .map(p => p.trim())
                    .filter(p => p !== ''),
                genres: data.genres
                    .split(',')
                    .map(g => g.trim())
                    .filter(p => p !== '')
            }

            await updateGame(id, payload)
            setRedirecting(true)
            navigate('/games')
        } catch (error) {
            console.error(error)
        }
    }

    // validations rules
    const background_imageRules = {
        required: 'Background image URL is required',
        pattern: {
            value: /^https?:\/\/.+/i,
            message: 'Must be a valid URL'
        }
    }

    const nameRules = {
        required: 'El nombre es obligatorio',
        minLength: { value: 3, message: 'EL nombre debe tener al menos 3 caracteres' },
        maxLength: { value: 60, message: 'El nombre debe tener como máximo 60 caracteres' }
    }

    const releasedRules = {
        required: 'La fecha de lanzamiento es obligatoria',
        pattern: {
            // YYYY-MM-DD
            value: /^\d{4}-\d{2}-\d{2}$/,
            message: 'Fecha debe estar en formato AÑO-MES-DIA'
        }
    }

    const platformsRules = {
        required: 'La plataforma es obligatoria',
        validate: value => value.split(',').filter(v => v.trim() !== '').length > 0 || 'Al menos una plataforma'
    }

    const genresRules = {
        required: 'El genero es obligatorio',
        validate: value => value.split(',').filter(v => v.trim() !== '').length > 0 || 'Al menos un genero'
    }

    const styleValidations = "ml-2 text-xs italic text-red-400 font-semibold leading-tight"

    return (
        <>
            <div className="w-full max-w-7xl h-full flex flex-col justify-center items-center flex-1 mt-10 mb-10 mx-auto px-4 sm:px-6 lg:px-10 py-4">
                <h3 className="uppercase text-2xl md:text-3xl lg:text-4xl sm:max-w-2xl max-w-lg leading-snug text-white text-center mb-10">
                    Keep your games<br /> <span className='color-arcadia'>update {currentGame?.name}</span>
                </h3>

                <form onSubmit={handleSubmit(handleUpdate)} className="w-full sm:min-h-[400px] max-w-md rounded-2xl bg-card border-arcadia p-5 flex flex-col
                justify-center items-center gap-2 mb-10">

                    {/* name */}
                    <div className='w-full'>
                        <input
                            {...register("name", nameRules)}
                            type="text"
                            placeholder="Nombre del juego aqui"
                            className="w-full bg-[#ECC799] px-4 py-2 rounded-full text-arcadia mb-2
                            focus:outline-none focus:ring-2 focus:ring-[#A6755A] placeholder:italic"
                        />
                        {errors.name && <p className={styleValidations}>{errors.name.message}</p>}
                    </div>

                    {/* released */}
                    <div className='w-full'>
                        <input
                            {...register("released", releasedRules)}
                            type="text"
                            placeholder="Fecha en formato ALOD-MES-DIA"
                            className="w-full bg-[#ECC799] px-4 py-2 rounded-full text-arcadia mb-2
                            focus:outline-none focus:ring-2 focus:ring-[#A6755A] placeholder:italic"
                        />
                        {errors.released && <p className={styleValidations}>{errors.released.message}</p>}
                    </div>

                    {/* platforms */}
                    <div className='w-full'>
                        <input
                            {...register("platforms", platformsRules)}
                            type="text"
                            placeholder="PC, PlayStation 4, Xbox One"
                            className="w-full bg-[#ECC799] px-4 py-2 rounded-full text-arcadia mb-2
                            focus:outline-none focus:ring-2 focus:ring-[#A6755A] placeholder:italic"
                        />
                        {errors.platforms && <p className={styleValidations}>{errors.platforms.message}</p>}
                    </div>

                    {/* genres */}
                    <div className='w-full'>
                        <input
                            {...register("genres", genresRules)}
                            type="text"
                            placeholder="Action, Adventure, Puzzle"
                            className="w-full bg-[#ECC799] px-4 py-2 rounded-full text-arcadia mb-2
                            focus:outline-none focus:ring-2 focus:ring-[#A6755A] placeholder:italic"
                        />
                        {errors.genres && <p className={styleValidations}>{errors.genres.message}</p>}
                    </div>

                    {/* bacgkround image */}
                    <div className='w-full'>
                        <input
                            id="background_image"
                            {...register("background_image", background_imageRules)}
                            type="text"
                            placeholder="https://example.com/image.jp"
                            className="w-full bg-[#ECC799] px-4 py-2 rounded-full text-arcadia mb-2
                            focus:outline-none focus:ring-2 focus:ring-[#A6755A] placeholder:italic"
                        />
                        {errors.background_image && <p className={styleValidations}>{errors.background_image.message}</p>}
                    </div>

                    <button
                        type='submit'
                        disabled={loading}
                        className='bg-[#FF6108] px-4 py-2  uppercase text-white rounded-full text-sm cursor-pointer'
                    >
                        Actualizar juego
                    </button>
                </form>

                <GoBackButton />
            </div>
        </>
    )
}
