import { IRegisterUser, IUser } from "./interfaces"
import { generateApiUrl, request, RequestMethod } from "./utils"
export const login = () => {}

export const register = async (data: IRegisterUser) => {
    const url = generateApiUrl("auth/register")
    const result = await request(RequestMethod.POST, url, JSON.stringify(data))
    return result
}

export const getUsers = async () => {
    const url = generateApiUrl("users")
    const users = await request(RequestMethod.GET, url)
    return users
}