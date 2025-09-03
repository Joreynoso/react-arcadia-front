import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/authContext"

const PrivateRoute = ({ requiredPermission }) => {
    const { user, hasPermission } = useAuth()

    // si no está logueado → redirige a login
    if (!user) return <Navigate to="/login" replace />

    // si se requiere un permiso y no lo tiene → redirige a 403
    if (requiredPermission && !hasPermission(requiredPermission)) {
        return <Navigate to="/403" replace />
    }

    // si todo está bien → renderiza las rutas hijas
    return <Outlet />
}

export default PrivateRoute
