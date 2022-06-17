import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Layout } from "../components/base"
import { useUsers } from "../hook"
import { IUser } from "../interfaces"

const Profile = () => {
    const { userId } = useParams()
    const { findUserById } = useUsers()
    const [user, setUser] = useState<IUser>()

    useEffect(() => {
        const user = findUserById(userId as string)
        setUser(user)
    }, [])

    // Random color generator

    return (
        <Layout>
            <div className="flex justify-center">
                <div className="max-w-screen-lg w-3/12 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col items-center py-10">
                        <span className="flex justify-center items-center mb-3 w-24 h-24 bg-red-200 rounded-full text-3xl">
                            {user?.fullName.split(" ").map(word => word[0]).join("").toUpperCase()}
                        </span>
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user?.fullName}</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{user?.email}</span>
                        <div className="flex mt-4 space-x-3 lg:mt-6">
                            <span className="inline-flex items-center text-gray-400">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 112h288M192 64v48m80 336l96-224 96 224m-162.5-64h133M281.3 112S257 206 199 277 80 384 80 384"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 336s-35-27-72-75-56-85-56-85"></path></svg>
                                {user?.lang.toUpperCase()}
                            </span>
                            <span className="inline-flex items-center text-gray-400">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"></path><circle cx="256" cy="192" r="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle></svg>
                                {user?.country}
                            </span>
                            {/* <span className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</span>
                        <span className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</span> */}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Profile