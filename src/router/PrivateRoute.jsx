import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAuth } from "../context/authContext"

const PrivateRoute = ({ requiredPermission }) => {

    const { user } = useAuth()
    const location = useLocation()

    // Usuario no autenticado → login
    if (!user) return <Navigate to="/login" replace state={{ from: location }} />

    // Usuario autenticado pero sin permisos → 403
    if (requiredPermission && !hasPermission(requiredPermission)) {
        return <Navigate to="/403" replace />
    }

    // Usuario autenticado y con permisos → renderiza rutas hijas
    return <Outlet />
}

export default PrivateRoute
