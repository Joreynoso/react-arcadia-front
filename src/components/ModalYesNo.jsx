export default function ModalMessageAction({ open, onCancel, onConfirm, message }) {
    if (!open) return null

    return (
        <div className="fixed top-10 left-1/2 -translate-x-1/2 flex items-center justify-center z-50">
            <div className="bg-card border-arcadia border rounded-full px-6 py-3 shadow-lg flex items-center gap-4 max-w-xs w-auto">
                <p className="text-arcadia text-center text-sm font-medium truncate">
                    {message}
                </p>
                <div className="flex gap-2">
                    <button
                        onClick={onCancel}
                        className="px-3 py-1 rounded-full bg-gray-300 text-gray-700 text-xs hover:bg-gray-400 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-3 py-1 rounded-full bg-[#FF6108] text-white text-xs hover:bg-[#e45507] transition-colors"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    )
}
