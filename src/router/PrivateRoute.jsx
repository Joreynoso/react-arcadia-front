import { Navigate, Outlet } from "react-router-dom"
import { usePermission } from "../hooks/usePermission"
import LoadingCard from '../components/LoadingCard'
import { useAuth } from '../context/authContext'

export default function PrivateRoute({ rolesAllowed = [] }) {
    const { user, loadingUser } = useAuth()
    const { role, can } = usePermission()

    if (loadingUser) return <LoadingCard />

    if (!user) return <Navigate to="/login" replace />

    if (rolesAllowed.length > 0 && !can(rolesAllowed)) {
        return <Navigate to="/403" replace />
    }

    return <Outlet />
}
