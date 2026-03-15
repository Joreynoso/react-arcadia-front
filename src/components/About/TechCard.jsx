import { motion } from 'framer-motion'

export default function TechCard({ name, description, icon }) {
    return (
        <motion.div
            whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] } 
            }}
            className="flex flex-col p-6 bg-card rounded-2xl border-arcadia h-full group transition-shadow duration-500 hover:shadow-2xl hover:shadow-[#DB8E6B]/10"
        >
            <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-[#DB8E6B] border-arcadia-small text-[#FCE3CB] shadow-sm group-hover:bg-[#83503B] transition-colors duration-300">
                    {icon}
                </div>
                <h3 className="font-serif text-lg text-arcadia font-bold leading-tight">
                    {name}
                </h3>
            </div>
            
            <p className="text-sm text-arcadia/80 leading-relaxed font-medium">
                {description}
            </p>

            <div className="mt-auto pt-4 flex justify-end">
                <motion.div 
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    className="h-1 bg-[#83503B] rounded-full opacity-20"
                />
            </div>
        </motion.div>
    )
}
