//imports
import GoBackButton from '../components/GoBackButton'
import ErrorCard from '../components/ErrorCard'
import LoadingCard from '../components/LoadingCard'

import { useGame } from '../context/gamesContext'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

export default function GameUpdate() {
    const { error, loading, createGame } = useGame()
    const [redirecting, setRedirecting] = useState(false)
    const navigate = useNavigate()

    // useForm hook desctructuring
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onChange' })

    // handle create function
    async function handleCreate(data) {
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
                    .filter(g => g !== '')
            }

            await createGame(payload)
            setRedirecting(true)
            navigate("/games")
        } catch (error) {
            console.error(error)
        }
    }

    // condicional rendering
    if (loading || redirecting) return <LoadingCard />
    if (error) return <ErrorCard />

    // validations rules
    const background_imageRules = {
        required: 'Background image URL is required',
        pattern: {
            value: /^https?:\/\/.+/i,
            message: 'Must be a valid URL'
        }
    }

    const nameRules = {
        required: 'Game name is required',
        minLength: { value: 2, message: 'Name must be at least 2 characters' },
        maxLength: { value: 100, message: 'Name must be less than 100 characters' }
    }

    const releasedRules = {
        required: 'Release date is required',
        pattern: {
            // YYYY-MM-DD
            value: /^\d{4}-\d{2}-\d{2}$/,
            message: 'Date must be in format YYYY-MM-DD'
        }
    }

    const platformsRules = {
        required: 'Platforms are required',
        validate: value => value.split(',').filter(v => v.trim() !== '').length > 0 || 'Enter at least one platform'
    }

    const genresRules = {
        required: 'Genres are required',
        validate: value => value.split(',').filter(v => v.trim() !== '').length > 0 || 'Enter at least one genre'
    }

    const styleValidations = "text-xs italic text-red-400 font-semibold leading-tight"

    return (
        <>
            <div className="w-full max-w-7xl h-full flex flex-col justify-center items-center flex-1 mt-10 mb-10 mx-auto px-4 sm:px-6 lg:px-10 py-4">
                <h3 className="uppercase text-2xl md:text-3xl lg:text-4xl sm:max-w-2xl max-w-lg leading-snug text-white text-center mb-10">
                    Creatae a new<br /> <span className='color-arcadia'>Game</span>
                </h3>

                <form onSubmit={handleSubmit(handleCreate)}
                    className="w-full sm:min-h-[400px] max-w-md rounded-2xl bg-card border-arcadia 
                p-5 flex flex-col justify-center items-center gap-2 mb-10" autoComplete="off">

                    {/* name */}
                    <div className='w-full'>
                        <input
                            {...register("name", nameRules)}
                            type="text"
                            placeholder="game name here"
                            className="w-full bg-[#ECC799] px-4 py-2 rounded-full text-arcadia mb-2
                            focus:outline-none focus:ring-2 focus:ring-[#A6755A]"
                        />
                        {errors.name && <p className={styleValidations}>{errors.name.message}</p>}
                    </div>

                    {/* released */}
                    <div className='w-full'>
                        <input
                            {...register("released", releasedRules)}
                            type="text"
                            placeholder="Type released date YYYY-MM-DD"
                            className="w-full bg-[#ECC799] px-4 py-2 rounded-full text-arcadia mb-2
                            focus:outline-none focus:ring-2 focus:ring-[#A6755A]"
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
                            focus:outline-none focus:ring-2 focus:ring-[#A6755A]"
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
                            focus:outline-none focus:ring-2 focus:ring-[#A6755A]"
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
                            focus:outline-none focus:ring-2 focus:ring-[#A6755A]"
                        />
                        {errors.background_image && <p className={styleValidations}>{errors.background_image.message}</p>}
                    </div>

                    <button
                        type='submit'
                        disabled={loading}
                        className='bg-[#FF6108] px-4 py-2  uppercase text-white rounded-full text-sm cursor-pointer'
                    >
                        {loading ? 'Updating...' : 'Update game'}
                    </button>
                </form>

                <GoBackButton />
            </div>
        </>
    )
}
