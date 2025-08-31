// import
import { Navigate } from "react-router-dom"
import { useAuth } from '../context/authContext'

export default function PrivateRoute({ children, permission }) {

    // context
    const { user } = useAuth()

    // if are not user loggin, redirecto to login
    if (!user) return <Navigate to={'/login'}/>

    // check if exist user has permission or not
    if (!permission && !user.permission?.includes(permission)) {
       return <Navigate to={'/403'} replace/> // prevent user click "back button"
    }

    // all valid, pass through
    return children
}