import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Link } from "react-router-dom"

export default function HeroSection() {
  const { scrollY } = useScroll()

  // Rango de movimiento vertical (nubes = más rápido, niño = más lento)
  const boyBase = useTransform(scrollY, [0, 500], [0, 200])
  const leftCloudBase = useTransform(scrollY, [0, 500], [0, 100])
  const rightCloudBase = useTransform(scrollY, [0, 500], [0, 120])
  const topCloudBase = useTransform(scrollY, [0, 500], [0, 80])
  const midCloudBase = useTransform(scrollY, [0, 500], [0, 150])

  return (
    <div className="relative w-full flex flex-col min-h-screen mask-b-from-60%">
      {/* title */}
      <div className="py-10 sm:px-10 sm:py-10 text-center flex flex-col justify-center items-center ">
        <h3 className="uppercase text-3xl sm:text-4xl md:text-5xl sm:max-w-2xl max-w-lg 
                    leading-tight text-white mb-4">
          Explora +500 de <br />
          <span className='color-arcadia'>aventuras únicas.</span>
        </h3>

        <Link to="/games" className="inline-block uppercase bg-card border-arcadia text-[#7D4C38] 
          rounded-full px-4 py-2 text-sm transition-transform duration-300 ease-in-out hover:-translate-y-2">
          ¡Empieza tu colección!
        </Link>
      </div>

      {/* boy */}
      <motion.img
        src="images/boy.svg" alt="boy"
        style={{ y: boyBase, willChange: "transform" }}
        className='
          absolute
          left-1/2 -translate-x-1/2
          w-[80%] sm:w-[60%] md:w-[50%] lg:w-[45%]
          top-[30%]'
      />

      {/* left cloud */}
      <motion.img
        src="images/leftCloud.svg" alt="leftCloud"
        style={{ y: leftCloudBase, willChange: "transform" }}
        className='
          absolute left-0
          w-[50%] sm:w-[45%] md:w-[40%] lg:w-[35%]
          top-[55%] sm:top-[40%] md:top-[25%]'
      />

      {/* right cloud */}
      <motion.img
        src="images/rightCloud.svg" alt="rightCloud"
        style={{ y: rightCloudBase, willChange: "transform" }}
        className='
          absolute right-0
          w-[40%] sm:w-[45%] md:w-[40%] lg:w-[35%]
          top-[45%] sm:top-[40%] md:top-[25%]'
      />

      {/* top cloud */}
      <motion.img
        src="images/topCloud.svg" alt="topCloud"
        style={{ y: topCloudBase, willChange: "transform" }}
        className='
          absolute
          top-[23%]
          right-[15%] 
          w-[50%] sm:w-[40%] lg:w-[25%]'
      />

      {/* mid cloud */}
      <motion.img
        src="images/midCloud.svg" alt="midCloud"
        style={{ y: midCloudBase, willChange: "transform" }}
        className='absolute
          top-[48%] md:top-[50%] lg:top-[60%] xl:top-[70%]
          left-1/2 -translate-x-1/2
          w-[40%] sm:w-[30%] lg:w-[25%]'
      />
    </div>
  )
}
