import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import LeftCloud from '../images/leftCloud.svg'
import RightCloud from '../images/rightCloud.svg'
import { Link } from 'react-router-dom'

export default function CloudSection() {
    const { scrollY } = useScroll()

    // Parallax vertical invertido
    const leftCloudBase = useTransform(scrollY, [0, 400], [0, 100])   // baja
    const rightCloudBase = useTransform(scrollY, [0, 400], [0, -100]) // sube

    const springConfig = { stiffness: 40, damping: 20 }
    const leftCloudY = useSpring(leftCloudBase, springConfig)
    const rightCloudY = useSpring(rightCloudBase, springConfig)

    return (
        <section className="relative min-h-[300px] sm:min-h-screen w-full flex flex-col justify-center items-center overflow-visible">

            {/* title */}
            <motion.h3
                className="uppercase text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-lg sm:max-w-2xl
          text-white text-center leading-snug z-10 mb-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
            >
                Explore more than
                <span className="color-arcadia">
                    <br />+500 games
                </span>
            </motion.h3>

            {/* clouds */}
            <motion.img
                src={LeftCloud}
                alt="left cloud"
                style={{ y: leftCloudY }}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-[40%] sm:w-[35%]"
            />
            <motion.img
                src={RightCloud}
                alt="right cloud"
                style={{ y: rightCloudY }}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-[40%] sm:w-[35%]"
            />

            {/* button */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <Link
                    to="/games"
                    className="inline-block uppercase bg-card border-arcadia text-[#7D4C38] 
          rounded-full px-4 py-2 text-sm transition-transform duration-300 ease-in-out hover:-translate-y-2"
                >
                    discover games!
                </Link>
            </motion.div>
        </section>
    )
}
