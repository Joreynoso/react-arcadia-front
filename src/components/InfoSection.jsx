// imports
import { motion } from 'framer-motion'

export default function InfoSection() {
    const iconStar = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-[#FFDA07]">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
        </svg>
    )

    return (
        <>
            {/* informative section */}
            <div className='w-full min-h-screen flex flex-col justify-center items-center flex-1 px-4 sm:px-6 lg:px-10 py-4'>

                {/* title */}
                <motion.h3
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.8 }}
                    className="uppercase text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-snug mb-10 text-white text-center">
                    Tu misión para crear la <br /><span className='color-arcadia'>biblioteca definitiva</span>
                </motion.h3>

                {/* grid section */}
                <div
                    className='w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6'>

                    {/* block 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.8 }}
                        className='flex flex-col bg-card rounded-2xl border-arcadia h-60 md:col-span-1 xl:col-span-3 justify-center items-center text-center'>
                        <h4 className='text-arcadia   leading-tight text-xl max-w-[70%] mb-4'>
                            Guarda tus juegos favoritos en tu biblioteca y accede a ellos cuando quieras.
                        </h4>

                        <span className='bg-[#DB8E6B] border-arcadia px-4 py-2 rounded-full flex gap-2'>
                            {iconStar} {iconStar} {iconStar}
                        </span>
                    </motion.div>

                    {/* block 2 */}
                    {/* block 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.8 }}
                        className='flex justify-center items-center bg-[#FCCE9F] rounded-2xl border-arcadia h-60 md:col-span-1 xl:col-span-2'
                    >
                        <img src="/images/infoBoy.svg" alt="infoBoy" className='h-[125%]' />
                    </motion.div>

                    {/* block 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.8 }}
                        className='flex flex-col justify-center items-center text-center bg-[#FCCE9F] rounded-2xl border-arcadia h-60 md:col-span-1 xl:col-span-2'>
                        <h4 className='text-arcadia   leading-tight text-xl max-w-[70%] mb-4'>
                            Busca fácilmente en tu biblioteca y encuentra los juegos que más amas.
                        </h4>
                        <span className='bg-[#DB8E6B] border-arcadia px-4 py-2 rounded-full flex gap-2'>
                            <img src="/images/infoShield.svg" alt="infoShield" className='size-6' />
                            <img src="/images/infoDoubleSword.svg" alt="InfoDoubleSword" className='size-6' />
                            <img src="/images/infoSword.svg" alt="InfoSword" className='size-6' />
                        </span>
                    </motion.div>

                    {/* block 4 */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.8 }}
                        className='flex flex-col justify-center items-center text-center bg-card rounded-2xl border-arcadia h-60 md:col-span-1 xl:col-span-3'>
                        <h4 className='text-arcadia   leading-tight text-xl max-w-[70%] mb-4'>
                           Descubre nuevas aventuras y no te pierdas ningún juego que valga la pena.
                        </h4>
                        <span className='bg-[#DB8E6B] border-arcadia px-4 py-2 rounded-full flex gap-2'>
                            {iconStar} {iconStar} {iconStar} {iconStar} {iconStar}
                        </span>
                    </motion.div>
                </div>
            </div>

        </>
    )
}