// imports
import { useState, useRef, useEffect } from 'react'

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef(null)

    // setear volumen al cargar el componente
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.1 // 20% del volumen máximo
        }
    }, [])

    // handle toggle Music
    const toggleMusic = () => {
        if (!audioRef.current) return

        if (isPlaying) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }

        setIsPlaying(!isPlaying)
    }

    const iconPlay = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
        </svg>
    )

    const iconPause = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
        </svg>
    )

    // render return
    return (
        <>
            <div className="fixed bottom-4 right-4">
                <button onClick={toggleMusic} className="bg-[#FF6108] p-3 rounded-full text-white shadow-lg hover:bg-[#e05500]">
                    {isPlaying ? iconPause : iconPlay}
                </button>

                {/* Audio oculto */}
                <audio ref={audioRef} src="/music/arcadiaSong.mp3" loop />
            </div>
        </>
    )
}