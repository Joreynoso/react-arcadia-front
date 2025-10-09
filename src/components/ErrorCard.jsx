
export default function ErrorCard({ message }) {
    // Si el mensaje incluye "403", mostrar texto personalizado
    const displayMessage = message?.includes('403')
        ? 'Sesión expirada, por favor logueate de nuevo'
        : message

    return (
        <div className="w-full max-w-md mx-auto mt-6 mb-10 flex flex-col justify-center items-center">
            <div className="bg-card border border-arcadia rounded-2xl px-6 py-4 shadow-lg flex items-center gap-3 mb-4">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-red-500 text-white font-bold">
                    !
                </span>
                <p className="text-red-500 text-sm font-medium">
                    {displayMessage}
                </p>
            </div>

        </div>
    )
}