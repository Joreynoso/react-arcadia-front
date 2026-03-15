import TechCard from "./About/TechCard"
import { motion } from 'framer-motion'

// ── SVG icons ────────────────────────────────────────────────
const ReactIcon = () => (
    <svg viewBox="0 0 128 128" className="size-6" fill="currentColor">
        <circle cx="64" cy="64" r="11" />
        <path d="M64 30c-19.8 0-38 4.9-51.4 13C5.9 48.5 2 54.6 2 61s3.9 12.5 10.6 18c13.4 8.1 31.6 13 51.4 13s38-4.9 51.4-13C122.1 73.5 126 67.4 126 61s-3.9-12.5-10.6-18C102 34.9 83.8 30 64 30zm0 6c18.6 0 35.7 4.6 47.8 12 5.9 3.6 8.2 7.3 8.2 11s-2.3 7.4-8.2 11C99.7 77.4 82.6 82 64 82S28.3 77.4 16.2 70C10.3 66.4 8 62.7 8 59s2.3-7.4 8.2-11C28.3 40.6 45.4 36 64 36z" />
        <path d="M42.6 15.9C33.3 31.7 28 51.7 28 73s5.3 41.3 14.6 57.1c4.6 8 9.8 13.5 14.9 15.9 2.5 1.2 4.9 1.5 7 1s4.3-1.9 6.4-4.6c4.6-5.8 8.4-15.4 10.8-27.7C83.8 102.8 85 88.3 85 73s-1.2-29.8-3.3-41.7C79.3 19.1 75.5 9.5 70.9 3.7c-2.1-2.7-4.3-4.1-6.4-4.6s-4.5-.2-7 1C52.4 2.5 47.2 7.9 42.6 15.9zm5.2 3c4-6.9 8.3-11.3 12-13.1 1.8-.9 3.3-1.1 4.6-.8 1.3.3 2.9 1.3 4.6 3.5 3.9 4.9 7.4 13.8 9.6 25.6 2.1 11.7 3.3 26 3.3 40.9s-1.2 29.2-3.3 40.9c-2.2 11.8-5.7 20.7-9.6 25.6-1.7 2.2-3.3 3.2-4.6 3.5-1.3.3-2.8.1-4.6-.8-3.7-1.8-8-6.2-12-13.1C37.7 118.8 34 99.3 34 79s3.7-39.8 13.8-60.1z" />
    </svg>
)

const NodeIcon = () => (
    <svg viewBox="0 0 128 128" className="size-6" fill="currentColor">
        <path d="M116.4 31.4c-1.2-2-36.4-22.3-46.7-28.3-3.6-2.1-7.8-2.1-11.4 0C48.1 9.1 12.8 29.4 11.6 31.4c-1.2 2-1.2 42.6 0 44.6 1.2 2 36.4 22.3 46.7 28.3 1.8 1 3.8 1.5 5.7 1.5s3.9-.5 5.7-1.5c10.3-5.9 45.6-26.2 46.7-28.3 1.1-2.1 1.1-42.6 0-44.6zM69.3 93.3c-1.4.8-11 .2-12.7-.8-1.4-.8-34.9-20.1-34.9-21.7 0-1.2-.5-37.1.6-38.3 1.1-1.2 32.1-19.1 33.6-19.1 1.6 0 34.6 18.9 36 20.4 1.1 1.1.2 38.3-.3 39.5-1.2 2.8-21.6 19.5-22.3 20z" />
    </svg>
)

const MongoDBIcon = () => (
    <svg viewBox="0 0 128 128" className="size-6" fill="currentColor">
        <path d="M88.2 55.7c-3.1-12.3-9.5-23.7-18.7-32.9l-5.5-5.5-5.5 5.5c-9.2 9.2-15.6 20.6-18.7 32.9-2.5 10.1-2.5 20.7 0 30.7 3.1 12.3 9.5 23.7 18.7 33l5.5 5.5 5.5-5.5c9.2-9.3 15.6-20.7 18.7-33 2.5-10 2.5-20.6 0-30.7zM64 112.9c-10.7-11.2-17.6-25.9-19.5-41.9h39c-1.9 16-8.8 30.7-19.5 41.9zm19.9-49.9h-39.8c1.3-10.7 5.3-20.8 11.4-29.5 2.5-3.5 5.4-6.8 8.5-9.8 3.1 3 6 6.3 8.5 9.8 6.1 8.7 10.1 18.8 11.4 29.5z" />
    </svg>
)

const ExpressIcon = () => (
    <svg viewBox="0 0 128 128" className="size-6" fill="currentColor">
        <path d="M128 64c0 35.3-28.7 64-64 64S0 99.3 0 64 28.7 0 64 0s64 28.7 64 64zm-37.5 1.5c-1.1-1.1-2.6-1.7-4.1-1.7-1.5 0-3 .6-4.1 1.7-1.1 1.1-1.7 2.6-1.7 4.1 0 1.5.6 3 1.7 4.1 1.1 1.1 2.6 1.7 4.1 1.7 1.5 0 3-.6 4.1-1.7 1.1-1.1 1.7-2.6 1.7-4.1 0-1.5-.6-3-1.7-4.1zm-32.7.2c-1.1-1.1-2.6-1.7-4.1-1.7-1.5 0-3 .6-4.1 1.7-1.1 1.1-1.7 2.6-1.7 4.1 0 1.5.6 3 1.7 4.1s2.6 1.7 4.1 1.7c1.5 0 3-.6 4.1-1.7s1.7-2.6 1.7-4.1c.1-1.6-.5-3.1-1.7-4.1zM64 45c-10.5 0-19 8.5-19 19s8.5 19 19 19 19-8.5 19-19-8.5-19-19-19z" />
    </svg>
)

const TailwindIcon = () => (
    <svg viewBox="0 0 128 128" className="size-6" fill="currentColor">
        <path d="M64 16c-16 0-26 8-30 24 6-8 13-11 21-9 5 1 8 4 12 8 6 6 12 13 26 13 16 0 26-8 30-24-6 8-13 11-21 9-5-1-8-4-12-8-6-6-12-13-26-13zm-32 32C16 48 6 56 2 72c6-8 13-11 21-9 5 1 8 4 12 8 6 6 12 13 26 13 16 0 26-8 30-24-6 8-13 11-21 9-5-1-8-4-12-8-6-6-12-13-26-13z" />
    </svg>
)

const GeminiIcon = () => (
    <svg viewBox="0 0 128 128" className="size-6" fill="currentColor">
        <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 114c-27.6 0-50-22.4-50-50s22.4-50 50-50 50 22.4 50 50-22.4 50-50 50z" />
        <path d="M64 28c-4.4 0-8 3.6-8 8v12h-12c-4.4 0-8 3.6-8 8s3.6 8 8 8h12v12c0 4.4 3.6 8 8 8s8-3.6 8-8v-12h12c4.4 0 8-3.6 8-8s-3.6-8-8-8h-12v-12c0-4.4-3.6-8-8-8z" />
    </svg>
)

const JWTIcon = () => (
    <svg viewBox="0 0 128 128" className="size-6" fill="currentColor">
        <path d="M128 64c0 35.3-28.7 64-64 64S0 99.3 0 64 28.7 0 64 0s64 28.7 64 64zM32 48h16l12 32 12-32h16L72 88H56L32 48z" />
    </svg>
)

const MotionIcon = () => (
    <svg viewBox="0 0 128 128" className="size-6" fill="currentColor">
        <path d="M0 128V0h128v32H32v32h64v32H32v32h96v32H0z" />
    </svg>
)

const ViteIcon = () => (
    <svg viewBox="0 0 128 128" className="size-6" fill="currentColor">
        <path d="M125.7 15.6L68.7 122.9 2.3 22.7l30.2-7.1 36.2 61.2L96.8 8.5l28.9 7.1z" />
    </svg>
)

const RouterIcon = () => (
    <svg viewBox="0 0 128 128" className="size-6" fill="currentColor">
        <path d="M128 64c0 35.3-28.7 64-64 64S0 99.3 0 64 28.7 0 64 0s64 28.7 64 64zM96 64L64 32v16H32v32h32v16l32-32z" />
    </svg>
)

// ── Tech stack data ───────────────────────────────────────────
const techStack = [
    {
        name: "React 19",
        description: "Librería UI de vanguardia con las últimas APIs y Server Actions.",
        icon: <ReactIcon />,
    },
    {
        name: "Node.js & Express 5",
        description: "Backend robusto y escalable con la última generación de Express.",
        icon: <NodeIcon />,
    },
    {
        name: "MongoDB & Mongoose",
        description: "Almacenamiento de datos flexible con modelado de esquemas elegante.",
        icon: <MongoDBIcon />,
    },
    {
        name: "Google Gemini AI",
        description: "Inteligencia artificial generativa para resúmenes de juegos automáticos.",
        icon: <GeminiIcon />,
    },
    {
        name: "Tailwind CSS v4",
        description: "Configuración zero-runtime con motor de diseño de alta velocidad.",
        icon: <TailwindIcon />,
    },
    {
        name: "Framer Motion",
        description: "Animaciones fluidas y experiencias interactivas premium.",
        icon: <MotionIcon />,
    },
    {
        name: "JWT & Bcrypt",
        description: "Seguridad avanzada con tokens de sesión y encriptación de claves.",
        icon: <JWTIcon />,
    },
    {
        name: "Vite",
        description: "Entorno de desarrollo ultrarápido para una experiencia de código fluida.",
        icon: <ViteIcon />,
    },
    {
        name: "React Router 7",
        description: "Navegación dinámica y gestión de rutas optimizada.",
        icon: <RouterIcon />,
    },
]

export default function AboutPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] // cubic-bezier smooth ease
            }
        }
    }

    return (
        <div className="w-full py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
            
            </motion.div>

            {/* header */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                    duration: 0.8, 
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.1 
                }}
                className="flex flex-col gap-3 mb-12 text-center md:text-left"
            >
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                    Nuestro <span className="color-arcadia">Arsenal Tecnológico</span>
                </h1>
                <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
                    Las herramientas de élite que dan vida a Arcadia, diseñadas para ofrecer una experiencia legendaria.
                </p>
                <div className="h-1.5 w-24 bg-[#DB8E6B] rounded-full border-arcadia-small mt-2 mx-auto md:mx-0" />
            </motion.div>

            {/* grid común y ordenado */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {techStack.map((tech) => (
                    <motion.div 
                        key={tech.name} 
                        variants={itemVariants}
                    >
                        <TechCard
                            name={tech.name}
                            description={tech.description}
                            icon={tech.icon}
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/* motivational footer */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mt-20 p-10 bg-card rounded-3xl border-arcadia text-center"
            >
                <h2 className="font-serif text-2xl md:text-3xl text-arcadia mb-4">
                    Construyendo el futuro del gaming
                </h2>
                <p className="text-arcadia/70 max-w-xl mx-auto italic">
                    "En Arcadia, no solo coleccionamos juegos, forjamos el santuario definitivo para cada aventurero digital."
                </p>
            </motion.div>
        </div>
    )
}
