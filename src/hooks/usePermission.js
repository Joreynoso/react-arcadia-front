import { useAuth } from "../context/authContext"

// Aquí pones tu lista de roles con sus IDs
const rolesMap = {
    "68b24327fc9e946459b5678f": "user",
    "68b24327fc9e946459b56790": "editor",
    "68b24327fc9e946459b56791": "admin"
}

export function usePermission() {
    const { user } = useAuth()
    const roleID = user?.role
    const role = roleID ? rolesMap[roleID] : null

    const can = (allowedRoles = []) => {
        if (!role) return false
        return allowedRoles.includes(role)
    }

    return {
        role,
        can,
    }
}
