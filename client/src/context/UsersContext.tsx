import { createContext, ReactNode, useEffect, useState } from "react"
import { getUsers } from "../api"
import { IUser } from "../interfaces"

type UsersContextType = {
    users: IUser[] | null
    findUserById: (id: string) => IUser
}

type UsersProviderType = {
    children: ReactNode
}

const usersInitialState: UsersContextType = {
    users: [],
    findUserById: (id: string) => ({} as IUser),
}

export const UsersContext = createContext<UsersContextType>(usersInitialState)

export const UsersProvider = ({ children }: UsersProviderType) => {
    const [users, setUsers] = useState<IUser[] | null>(null)

    useEffect(() => {
        const getAllUsers = async () => {
            const usersResponse = await getUsers()
            if (usersResponse.success) {
                setUsers(usersResponse.users)
            }
        }
        getAllUsers()
    }, [])

    const findUserById = (id: string) => users?.find(user => user._id == id) || {} as IUser
    
    return (
        <UsersContext.Provider value={{ users, findUserById }}>{children}</UsersContext.Provider>
    )
}
