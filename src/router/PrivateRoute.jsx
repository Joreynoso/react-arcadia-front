import { Navigate, Outlet } from "react-router-dom"
import { usePermission } from "../hooks/usePermission"
import LoadingCard from '../components/LoadingCard'
import { useAuth } from '../context/authContext'

export default function PrivateRoute({ rolesAllowed = [] }) {
    console.log('1. paso 1')
    const { user, loadingUser, loading } = useAuth()
    const { role, can } = usePermission()

    console.log('1. paso 1')

    if (loadingUser) return <LoadingCard />
    console.log('1. paso 1')

    if (!user) return <Navigate to="/login" replace />
    console.log('1. paso 1')

    if (rolesAllowed.length > 0 && !can(rolesAllowed)) {
        console.log('1. paso 1')
        return <Navigate to="/403" replace />
    }
    console.log('1. paso 1')

    return <Outlet />
}
