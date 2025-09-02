import { motion } from 'framer-motion'

export default function SummaryModal({ open, onClose, message }) {
    if (!open) return null  // no renderiza si está cerrado

    return (
        <div
            className="fixed inset-0 bg-[#321C16]/50 flex justify-center items-center text-center px-4 z-50">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-card rounded-xl shadow-xl max-w-lg w-full relative p-6 sm:p-12">
                <p className="text-arcadia text-xs sm:text-base leading-relaxed mb-6 whitespace-pre-line">
                    {message}
                </p>

                <button
                    onClick={onClose}
                    className="w-full px-4 py-2 uppercase text-sm text-white 
                    cursor-pointer bg-[#FF6108] hover:bg-[#e45507] transition-colors 
                    rounded-full">
                    Close Description
                </button>
            </motion.div>
        </div>
    )
}
