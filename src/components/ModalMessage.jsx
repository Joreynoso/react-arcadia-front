import { motion } from "framer-motion"

export default function ModalMessage({ open, onClose, message }) {
    if (!open) return null

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-10 left-1/2 -translate-x-1/2 flex items-center justify-center z-50">
            <div className="bg-card border-arcadia border rounded-full px-6 py-3 shadow-lg flex items-center gap-3 max-w-xs w-auto">
                <p className="text-arcadia text-center text-sm font-medium truncate">
                    {message}
                </p>
                <button
                    onClick={onClose}
                    className="px-3 py-1 rounded-full bg-[#FF6108] text-white text-xs hover:bg-[#e45507] transition-colors"
                >
                    Close
                </button>
            </div>
        </motion.div>
    )
}
