import { createContext, ReactNode } from "react"
import { io } from "socket.io-client"

const socket = io("http://localhost:4000")

export const SocketContext = createContext(socket)

interface ISocketProvider{
    children: ReactNode
}

export const SocketProvider = (props: ISocketProvider) => (
    <SocketContext.Provider value={socket}>{props.children}</SocketContext.Provider>
)
