// imports
import GameNotImage from './GameNotImage'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function CardsSection() {

    // statics games info
    const games = [
        { id: 1, name: 'name game', released: 'date released', background_image: 'http:/&' },
        { id: 2, name: 'name game', released: 'date released', background_image: 'http:/&' },
        { id: 3, name: 'name game', released: 'date released', background_image: 'http:/&' },
        { id: 4, name: 'name game', released: 'date released', background_image: 'http:/&' },
        { id: 5, name: 'name game', released: 'date released', background_image: 'http:/&' },
        { id: 6, name: 'name game', released: 'date released', background_image: 'http:/&' },
        { id: 7, name: 'name game', released: 'date released', background_image: 'http:/&' },
        { id: 8, name: 'name game', released: 'date released', background_image: 'http:/&' },
    ]

    const gameList = games.map(game => (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            key={game.id}
            className="relative rounded-xl bg-card flex flex-col p-2 md:p-3 border-arcadia gap-2 md:gap-3 h-auto md:h-72 text-center" >
            <div className="relative rounded-lg h-40 md:h-48 bg-[#FCCE9F] border-arcadia overflow-hidden">
                <GameNotImage />
            </div>

            {/* info */}
            <div className="flex flex-col text-center px-1 md:px-2" >
                <h4 className="text-sm md:text-base text-arcadia truncate font-semibold">{game.name}</h4>
                <span className="text-[10px] md:text-xs text-arcadia opacity-70 font-semibold">
                    {game.released}
                </span>
            </div>

            {/* button */}
            <button
                className='mt-auto bg-[#FF6108] px-3 py-1.5 md:px-4 md:py-2 uppercase text-white rounded-full text-xs 
                    md:text-sm cursor-pointer leading-none hover:bg-[#e45507] transition-colors w-full md:w-auto' >
                details
            </button>
        </motion.div>
    ))

    // render return
    return (
        <>
            <div className='w-full max-w-7xl min-h-screen mb-4 px-4 sm:px-6 lg:px-10 py-4 flex flex-col justify-center items-center'>

                {/* title */}
                <motion.h3
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="uppercase text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-snug mb-10 text-white text-center">
                    Your Quest to Build the <br /><span className='color-arcadia'>Ultimate Library</span>
                </motion.h3>

                {/* game list */}
                <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mask-b-from-45% mb-10">
                    {gameList}
                </div>

                <Link to="/games" className="inline-block uppercase bg-card border-arcadia text-[#7D4C38] 
                rounded-full px-4 py-2 text-sm transition-transform duration-300 ease-in-out hover:-translate-y-2">
                    discover games!
                </Link>
            </div>
        </>
    )
}