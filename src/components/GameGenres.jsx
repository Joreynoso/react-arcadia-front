export default function GameGenres() {

    // return render
    return (
        <>
            <div className="w-full mb-6 mx-auto flex flex-col sm:flex-row gap-4">

                {/* buttons */}
                <div className="w-full flex sm:flex-row gap-2">
                    {/* rpg */}
                    <button
                        className={`
                        flex-1 min-h-[38px] text-xs sm:text-sm uppercase color-arcadia 
                        borde-arcadia rounded-full px-3 py-2 cursor-pointer bg-[#FF6108] hover:bg-[#e45507] transition-colors
                        }
                    `}
                    >
                        RPG
                    </button>

                    {/* action */}
                    <button
                        className={`
                        flex-1 min-h-[38px] text-xs sm:text-sm uppercase color-arcadia 
                        borde-arcadia rounded-full px-3 py-2 cursor-pointer bg-[#FF6108] hover:bg-[#e45507] transition-colors
                        }
                    `}
                    >
                        Action
                    </button>

                    {/* role */}
                    <button
                        className={`
                        flex-1 min-h-[38px] text-xs sm:text-sm uppercase color-arcadia 
                        borde-arcadia rounded-full px-3 py-2 cursor-pointer bg-[#FF6108] hover:bg-[#e45507] transition-colors
                        }
                    `}
                    >
                        Role
                    </button>

                    {/* adventure */}
                    <button
                        className={`
                        flex-1 min-h-[38px] text-xs sm:text-sm uppercase color-arcadia 
                        borde-arcadia rounded-full px-3 py-2 cursor-pointer bg-[#FF6108] hover:bg-[#e45507] transition-colors
                        }
                    `}
                    >
                        Adventure
                    </button>

                    {/* platformer */}
                    <button
                        className={`
                        flex-1 min-h-[38px] text-xs sm:text-sm uppercase color-arcadia 
                        borde-arcadia rounded-full px-3 py-2 cursor-pointer bg-[#FF6108] hover:bg-[#e45507] transition-colors
                        }
                    `}
                    >
                        Platformer
                    </button>

                </div>
            </div>
        </>
    )
}