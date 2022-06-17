import { createContext, ReactNode, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSocket } from "../hook"
import { IUser } from "../interfaces"

type AuthContextType = {
    isLoggedIn: boolean
    user: IUser
    logout: () => void
    login: (user: IUser) => void
}

const authInitialState: AuthContextType = {
    isLoggedIn: false,
    user: {} as IUser,
    logout: () => {},
    login: (user: IUser) => {}
}

interface Prop {
    children: ReactNode
}

export const AuthContext = createContext<AuthContextType>(authInitialState)

export const AuthProvider = ({ children }: Prop) => {
    const { socket } = useSocket()
    const [user, setUser] = useState<IUser>({} as IUser)
    const [isLoggedIn, setLoggedIn] = useState<boolean>(false)

    const logout = () => { 
        setLoggedIn(false) 
        socket.emit("logout", user)
        setUser({} as IUser)
    }

    const login = (user: IUser) => {
        setLoggedIn(true)
        setUser(user)
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, user, login, logout  }}>
            {children}
        </AuthContext.Provider>
    )
}