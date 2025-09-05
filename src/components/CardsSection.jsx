// imports
import GameNotImage from './GameNotImage'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function CardsSection() {

    // statics games info
    const games = [
        { id: 1, name: 'The Elder Scrolls: Arena', released: '1994-02-28', background_image: 'https://media.rawg.io/media/games/ef8/ef823f3c46ff1e00803888b5c4476e10.jpg' },
        { id: 2, name: 'Tomb Raider II', released: '1997-10-31', background_image: 'https://media.rawg.io/media/games/cfc/cfc91eccc1de338b75a0576310ccbcec.jpg' },
        { id: 3, name: 'name game', released: 'date released', background_image: 'https://media.rawg.io/media/games/6c0/6c00ee85d1344f58c469e8e47fd8ae7c.jpg' },
        { id: 4, name: 'Resident Evil 1', released: '1996-03-22', background_image: 'https://media.rawg.io/media/games/510/51039d0ec5dc8c3e08ae4374dfceecec.jpg' },
        { id: 5, name: 'Final Fantasy III', released: '1994-04-02', background_image: 'https://media.rawg.io/media/games/98c/98c87b286cd2a2ba942167df384a9bd3.jpg' },
        { id: 6, name: 'Doom', released: '1993-12-10', background_image: 'https://media.rawg.io/media/games/47b/47b50d880be8453bf9cda6e5c007bc26.jpg' },
        { id: 7, name: 'Fallout', released: '1997-09-30', background_image: 'https://media.rawg.io/media/games/14a/14a83c56ff668baaced6e8c8704b6391.jpg' },
        { id: 8, name: 'STAR WARS Jedi Knight', released: '1998-02-17', background_image: 'https://media.rawg.io/media/screenshots/3ee/3ee387f0e1681ec4c7f082ce371ce904.jpg' },
    ]

    const gameList = games.map(game => (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.8  }}
            key={game.id}
            className="relative rounded-xl bg-card flex flex-col p-2 md:p-3 border-arcadia gap-2 md:gap-3 h-auto md:h-72 text-center" >
            <div className="relative rounded-lg h-40 md:h-48 bg-[#FCCE9F] border-arcadia overflow-hidden">
                <img
                    src={game.background_image}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* info */}
            <div className="flex flex-col text-center px-1 md:px-2" >
                <h4 className="text-sm md:text-base text-arcadia truncate font-semibold">{game.name}</h4>
                <span className="text-[10px] md:text-xs text-arcadia opacity-70 font-semibold">
                   Lanzamiento: {game.released}
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
                    Clasicos de todos <br /><span className='color-arcadia'>los tiempos</span>
                </motion.h3>

                {/* game list */}
                <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mask-b-from-45% mb-10">
                    {gameList}
                </div>

                <Link to="/games" className="inline-block uppercase bg-card border-arcadia text-[#7D4C38] 
                rounded-full px-4 py-2 text-sm transition-transform duration-300 ease-in-out hover:-translate-y-2">
                    ver lista de juegos
                </Link>
            </div>
        </>
    )
}