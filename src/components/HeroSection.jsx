import { motion, useScroll, useTransform } from "framer-motion"
import { Link } from "react-router-dom"

export default function HeroSection() {
  const { scrollY } = useScroll()

  // Rango de movimiento vertical optimizado
  const boyBase = useTransform(scrollY, [0, 400], [0, 80])
  const leftCloudBase = useTransform(scrollY, [0, 400], [0, 40])
  const rightCloudBase = useTransform(scrollY, [0, 400], [0, 50])
  const topCloudBase = useTransform(scrollY, [0, 400], [0, 35])
  const midCloudBase = useTransform(scrollY, [0, 400], [0, 60])

  return (
    <div className="relative w-full flex flex-col min-h-screen mask-b-from-60%">
      {/* title */}
      <motion.div 
        className="py-10 sm:px-10 sm:py-10 text-center flex flex-col justify-center items-center "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <h3 className="uppercase text-3xl sm:text-4xl md:text-5xl sm:max-w-2xl max-w-lg 
                    leading-tight text-white mb-4">
          Explora + de 500 <br />
          <span className='color-arcadia'>aventuras únicas.</span>
        </h3>

        <Link to="/games" className="inline-block uppercase bg-card border-arcadia text-[#7D4C38] 
          rounded-full px-4 py-2 text-sm transition-transform duration-200 ease-out hover:-translate-y-1">
          ¡Empieza tu colección!
        </Link>
      </motion.div>

      {/* boy */}
      <motion.img
        src="images/boy.svg" alt="boy"
        style={{ y: boyBase }}
        className='will-change-transform absolute left-1/2 -translate-x-1/2 w-[80%] sm:w-[60%] md:w-[50%] lg:w-[45%] top-[30%]'
      />

      {/* left cloud */}
      <motion.img
        src="images/leftCloud.svg" alt="leftCloud"
        style={{ y: leftCloudBase }}
        className='will-change-transform absolute left-0 w-[50%] sm:w-[45%] md:w-[40%] lg:w-[35%] top-[55%] sm:top-[40%] md:top-[25%]'
      />

      {/* right cloud */}
      <motion.img
        src="images/rightCloud.svg" alt="rightCloud"
        style={{ y: rightCloudBase }}
        className='will-change-transform absolute right-0 w-[40%] sm:w-[45%] md:w-[40%] lg:w-[35%] top-[45%] sm:top-[40%] md:top-[25%]'
      />

      {/* top cloud */}
      <motion.img
        src="images/topCloud.svg" alt="topCloud"
        style={{ y: topCloudBase }}
        className='will-change-transform absolute top-[23%] right-[15%] w-[50%] sm:w-[40%] lg:w-[25%]'
      />

      {/* mid cloud */}
      <motion.img
        src="images/midCloud.svg" alt="midCloud"
        style={{ y: midCloudBase }}
        className='will-change-transform absolute top-[48%] md:top-[50%] lg:top-[60%] xl:top-[70%] left-1/2 -translate-x-1/2 w-[40%] sm:w-[30%] lg:w-[25%]'
      />
    </div>
  )
}
