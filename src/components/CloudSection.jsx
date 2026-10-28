import { motion, useScroll, useTransform } from "framer-motion"
import { Link } from 'react-router-dom'

export default function CloudSection() {
    const { scrollY } = useScroll()

    // Parallax vertical invertido optimizado
    const leftCloudY = useTransform(scrollY, [0, 300], [0, 40])
    const rightCloudY = useTransform(scrollY, [0, 300], [0, -40])

    return (
        <section className="relative min-h-[300px] sm:min-h-screen w-full flex flex-col justify-center items-center overflow-visible">

            {/* title */}
            <motion.h3
                className="uppercase text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-lg sm:max-w-2xl
          text-white text-center leading-snug z-10 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.6 }}
            >
                Explora mundos que no 
                <span className="color-arcadia">
                    <br />sabías que existían
                </span>
            </motion.h3>

            {/* clouds */}
            <motion.img
                src="/images/leftCloud.svg"
                alt="left cloud"
                style={{ y: leftCloudY }}
                className="will-change-transform absolute left-0 top-1/2 -translate-y-1/2 w-[40%] sm:w-[35%]"
            />
            <motion.img
                src="/images/rightCloud.svg"
                alt="right cloud"
                style={{ y: rightCloudY }}
                className="will-change-transform absolute right-0 top-1/2 -translate-y-1/2 w-[40%] sm:w-[35%]"
            />

            {/* button */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.6 }}
            >
                <Link
                    to="/games"
                    className="inline-block uppercase bg-card border-arcadia text-[#7D4C38] 
          rounded-full px-4 py-2 text-sm transition-transform duration-200 ease-out hover:-translate-y-1"
                >
                    empieza tu colección hoy
                </Link>
            </motion.div>
        </section>
    )
}
