import { FormEvent } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useSocket } from "../hook"
import { generateApiUrl, request, RequestMethod } from "../utils"
import { registerValidator } from "../validation"


const Register = () => {
    const { socket } = useSocket()
    const navigate = useNavigate()
    const registerAction = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const url = generateApiUrl("auth/register")
        const data = {
            fullName: formData.get("fullName"),
            email: formData.get("email"),
            password: formData.get("password"),
            password2: formData.get("password2"),
            lang: formData.get("lang"),
            country: formData.get("country")
        }
        if (await registerValidator.isValidSync(data)) {
            const result = await request(RequestMethod.POST, url, JSON.stringify(data))
            if (result.success) {
                socket.emit("register", result.user)
                setTimeout(() => {
                    navigate("/")
                }, 1000);
            }
        }
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="px-4 py-16 mx-auto sm:px-6 lg:px-8 w-1/2">
                <div className="max-w-lg mx-auto">
                    <h1 className="text-2xl font-bold text-center text-indigo-600 sm:text-5xl">Teknasyon Portal</h1>
                    <form onSubmit={registerAction} className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl border boder-gray-50">
                        <div>
                            <label className="text-sm font-medium">Name surname</label>
                            <input
                                type="text"
                                name="fullName"
                                className="relative mt-1 w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm border"
                                placeholder="Enter full name"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium">Email</label>

                            <input
                                type="email"
                                name="email"
                                className="relative mt-1 w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm border"
                                placeholder="Enter email"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium">Password</label>

                            <div className="relative mt-1">
                                <input
                                    type="password"
                                    name="password"
                                    className="relative mt-1 w-full p-4 pr-12 text-sm border border-gray-200 rounded-lg shadow-sm"
                                    placeholder="Enter password"
                                />

                            </div>
                        </div>
                        <div>
                            <label className="text-sm font-medium">Password again</label>

                            <input
                                type="password"
                                name="password2"
                                className="relative mt-1 w-full p-4 pr-12 text-sm border border-gray-200 rounded-lg shadow-sm"
                                placeholder="Enter password"
                            />

                        </div>
                        <div>
                            <label className="text-sm font-medium">Language</label>
                            <input
                                type="text"
                                name="lang"
                                className="relative mt-1 w-full p-4 pr-12 text-sm border border-gray-200 rounded-lg shadow-sm"
                                placeholder="Enter language"
                            />

                        </div>
                        <div>
                            <label className="text-sm font-medium">Country</label>

                            <input
                                type="text"
                                name="country"
                                className="relative mt-1 w-full p-4 pr-12 text-sm border border-gray-200 rounded-lg shadow-sm"
                                placeholder="Enter password"
                            />
                        </div>

                        <button className="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-all duration-300 ease-in-out">
                            Register
                        </button>

                        <p className="text-sm text-center text-gray-500">
                            You have account?
                            <Link className="underline ml-2" to="/login">Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register