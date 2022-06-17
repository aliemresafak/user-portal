import { useContext, useEffect } from "react"
import { SocketContext, AuthContext, UsersContext } from "../context"

export const useSocket = () => {
    const socket = useContext(SocketContext)
    return socket
}

export const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth
}

export const useUsers = () => {
    const users = useContext(UsersContext)
    return users
}