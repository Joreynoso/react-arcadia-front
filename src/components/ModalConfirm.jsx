import { motion } from "framer-motion"

export default function Modal({ open, onConfirm, onCancel, message }) {
    if (!open) return null

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full fixed top-10 left-1/2 -translate-x-1/2 flex items-center justify-center z-50"
        >
            <div className="bg-card border-arcadia border rounded-xl px-6 py-6 shadow-lg flex flex-col items-center gap-4 max-w-xs w-auto">

                <p className="text-arcadia text-center text-sm font-medium">
                    {message}
                </p>

                <div className="flex gap-3">
                    <button
                        onClick={onCancel}
                        className="
                        cursor-pointer
                        px-4 py-2 rounded-full bg-[#7D4C38] text-white text-sm hover:bg-[#6a3e2f] transition-colors"
                    >
                        Cancelar
                    </button>

                    <button
                        onClick={onConfirm}
                        className="
                        cursor-pointer
                        px-4 py-2 rounded-full bg-[#FF6108] text-white text-sm hover:bg-[#e45507] transition-colors"
                    >
                        Confirmar
                    </button>
                </div>

            </div>
        </motion.div>
    )
}
