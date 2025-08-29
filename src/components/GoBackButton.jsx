// imports
import { useNavigate } from 'react-router-dom'

export default function GoBackButton() {

    // navigate
    const navigate = useNavigate()

    // return render
    return (
        <>
            {/* go back button */}
            <button
                onClick={() => navigate(-1)}
                className="w-40 bg-card border-arcadia text-arcadia libre-bold uppercase text-sm px-4 py-2 rounded-full font-semibold
                cursor-pointer">
                go back
            </button>
        </>
    )
}