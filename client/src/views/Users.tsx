import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { generateApiUrl, request, RequestMethod } from "../utils"
import { IUser } from "../interfaces"
import { Layout } from "../components/base"
type UserProp = {
    user: IUser
}
const User = ({ user }: UserProp) => {
    return (
        <Link to={`/profile/${user._id}`}>
            <div className="p-8 bg-white border border-blue-100 shadow-lg rounded-2xl" role="alert">
                <div className="items-center sm:flex">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-white bg-blue-400 rounded-full">
                    </span>

                    <p className="mt-3 text-2xl font-medium sm:mt-0 sm:ml-3">{user.fullName}</p>
                </div>
            </div>
        </Link>
    )
}
const Users = () => {
    const [users, setUsers] = useState<IUser[]>()

    useEffect(() => {
        const getUsers = async () => {
            const url = generateApiUrl("users")
            const result = await request(RequestMethod.GET, url)
            if (result.success) {
                setUsers(result.users)
            }
        }
        getUsers()
    }, [])

    return (
        <Layout>
            <div className="grid grid-cols-4 gap-8">
                {users?.map(user => (
                    <User user={user} />
                ))}

            </div>
        </Layout>
    )
}


export default Users