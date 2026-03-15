import { motion } from 'framer-motion'

export default function SkeletonCard() {
    return (
        <div className="relative rounded-xl bg-card flex flex-col p-2 md:p-3 border-arcadia gap-2 md:gap-3 h-auto md:h-72 overflow-hidden shadow-sm">
            {/* Image placeholder */}
            <div className="relative rounded-lg h-40 md:h-48 bg-[#DB8E6B]/20 overflow-hidden">
                <motion.div 
                    animate={{ 
                        background: ["linear-gradient(90deg, #DB8E6B10 0%, #DB8E6B30 50%, #DB8E6B10 100%)", "linear-gradient(90deg, #DB8E6B10 100%, #DB8E6B30 150%, #DB8E6B10 200%)"],
                        x: ['-100%', '100%']
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                />
            </div>

            {/* Title placeholder */}
            <div className="flex flex-col gap-2 px-1 md:px-2">
                <div className="h-4 bg-[#DB8E6B]/30 rounded-full w-3/4 mx-auto animate-pulse" />
                <div className="h-3 bg-[#DB8E6B]/20 rounded-full w-1/2 mx-auto animate-pulse" />
            </div>

            {/* Button placeholder */}
            <div className="mt-auto h-8 bg-[#DB8E6B]/40 rounded-full w-full animate-pulse" />
            
            {/* Action buttons placeholder (mimic admin) */}
            <div className="flex gap-1 mt-1">
                <div className="h-6 bg-[#DB8E6B]/10 rounded-full flex-1 animate-pulse" />
                <div className="h-6 bg-[#DB8E6B]/10 rounded-full flex-1 animate-pulse" />
            </div>
            
            {/* Favorite button placeholder */}
            <div className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 sm:w-10 sm:h-10 bg-[#DB8E6B]/40 rounded-full animate-pulse" />
        </div>
    )
}
