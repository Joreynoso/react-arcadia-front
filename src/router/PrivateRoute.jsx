import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAuth } from "../context/authContext"
import LoadingCard from '../components/LoadingCard'

const PrivateRoute = ({ requiredPermission }) => {
    console.log('1. entrando a al función')
    const { user, hasPermission,  loadingUser } = useAuth()
    const location = useLocation()

    if (loadingUser) return <LoadingCard />

    console.log('2. usuario que intenta ingresar', user)
    console.log('3. tiene permiso?', requiredPermission ? hasPermission(requiredPermission) : 'no permission requerido')

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
