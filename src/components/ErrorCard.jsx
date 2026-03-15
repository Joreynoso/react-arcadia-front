import { useNavigate } from "react-router-dom"

export default function ErrorCard({ message }) {
    const navigate = useNavigate()

    // Si el mensaje incluye "403" o "401", mostrar texto personalizado
    const errorMap = [
        { code: '403', text: 'Sesión expirada, por favor logueate de nuevo.' },
        { code: '401', text: 'Sesión expirada o no autorizada.' },
        { code: '500', text: 'Error interno del servidor.' },
        { code: '404', text: 'No se encontraron juegos con esos parametros.' }
    ]

    const errorMatched = errorMap.find(e => message?.includes(e.code))
    const displayMessage = errorMatched?.text || message
    const isExpired = errorMatched?.code === '403' || errorMatched?.code === '401'

    return (
        <div className="w-full max-w-md mx-auto mt-6 mb-10 flex flex-col justify-center items-center px-4">
            <div className="bg-card border border-arcadia rounded-2xl px-6 py-8 shadow-lg flex flex-col items-center gap-6 mb-4 w-full text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-500 text-white font-bold text-3xl shadow-inner">
                    !
                </div>
                
                <div className="flex flex-col gap-2">
                    <h3 className="text-arcadia font-bold text-xl uppercase tracking-wider">
                        {isExpired ? 'Acceso Restringido' : 'Ups! Algo salió mal'}
                    </h3>
                    <p className="text-arcadia/70 text-sm font-medium leading-relaxed">
                        {displayMessage}
                    </p>
                </div>

                {isExpired && (
                    <button 
                        onClick={() => navigate('/login')}
                        className="w-full bg-[#FF6108] hover:bg-[#e45507] text-white px-8 py-3 rounded-full font-bold uppercase text-xs sm:text-sm transition-all transform hover:scale-[1.02] shadow-lg active:scale-95"
                    >
                        Iniciar Sesión
                    </button>
                )}
            </div>
        </div>
    )
}