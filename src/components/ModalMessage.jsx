export default function ModalMessage({ open, onClose, message }) {
    if (!open) return null

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-card w-[90%] sm:w-[400px] rounded-2xl shadow-lg p-6 flex flex-col gap-4 items-center">
                <p className="text-arcadia text-center text-lg font-medium">{message}</p>
                <button
                    onClick={onClose}
                    className="mt-4 px-4 py-2 rounded-lg bg-[#FF6108] text-white hover:bg-[#e45507] transition-colors"
                >
                    Close
                </button>
            </div>
        </div>
    )
}
