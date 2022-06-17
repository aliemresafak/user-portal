import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { io, Socket } from "socket.io-client"
import { IUser } from "../interfaces"


interface ISocketProviderProp{
    children: ReactNode
}
interface IInitialSocketState {
    socket: Socket
    activeUsers: any[] | undefined
}
const initialSocketState: IInitialSocketState = {
    socket: io("http://localhost:4000"),
    activeUsers: []
}
export const SocketContext = createContext<IInitialSocketState>(initialSocketState)

export const SocketProvider = ({ children }: ISocketProviderProp) => {
    const socket = io("http://localhost:4000")
    const [activeUsers, setActiveUsers] = useState<IUser[]>()

    useEffect(() => { socket.on("active", async activeUsers => await setActiveUsers(activeUsers)) }, [])

    socket.on("active", message => setActiveUsers(message))
    return <SocketContext.Provider value={{ socket, activeUsers }}>{children}</SocketContext.Provider>
}