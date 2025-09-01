export default function SummaryModal({ setModalShow }) {

    const handlecloseModal = () => {
        setModalShow(false)
    }

    // return render
    return (
        <div className="fixed inset-0 bg-[#321C16]/50 flex justify-center items-center text-center px-4">
            <div className="bg-card rounded-xl shadow-xl max-w-lg w-full relative p-6 sm:p-12">
                <h3 className="text-lg font-semibold text-arcadia mb-4">
                    title of the video game
                </h3>
                <p className="text-arcadia text-xs sm:text-base leading-relaxed mb-6">
                    "\"Portal\" (2007) es un innovador juego de puzles en primera persona ambientado en los laboratorios
                    Aperture Science. Los jugadores, controlando a Chell, deben superar desafíos usando la \"Aperture
                    Science Handheld Portal Device\", creando portales para teletransportarse y manipular el entorno.
                    El juego destaca por su ingenioso diseño, humor negro y narrativa misteriosa. Ampliamente aclamado
                    y premiado, \"Portal\" es un hito en la industria, conocido por su mecánica única y su influencia
                    en el diseño de videojuegos.\n"
                </p>

                <button
                    onClick={handlecloseModal}
                    className="border-arcadia text-arcadia rounded-full px-3 py-2 uppercase text-xs sm:text-sm cursor-pointer">close descrition</button>
            </div>
        </div>
    )
}
