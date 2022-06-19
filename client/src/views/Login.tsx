import { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { useAuth, useSocket } from "../hook";
import { generateApiUrl, request, RequestMethod, sendNotification } from "../utils";
import { loginValidator } from "../validation";

const Login = () => {
    const auth = useAuth()
    const navigate = useNavigate()
    const { socket } = useSocket()
    const loginAction = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const url = generateApiUrl("auth/login")
        const data = {
            email: formData.get("email"),
            password: formData.get("password")
        }
        const validationResult = await loginValidator.isValidSync(data)
        console.log(validationResult)
        if (validationResult) {
            const result = await request(RequestMethod.POST, url, JSON.stringify(data))
            if (result.success) {
                auth.login(result.user)
                localStorage.setItem("deneme", JSON.stringify(result.user))
                socket.emit("login", result.user)
                setTimeout(() => {
                    navigate("/")
                }, 1000);
            }
        } else {
            sendNotification("Please check your entered credentials")
        }
    }
    return (
        <>
            <div className="w-screen h-screen flex justify-center items-center">
                <div className="px-4 py-16 mx-auto sm:px-6 lg:px-8 w-1/2">
                    <div className="max-w-lg mx-auto">
                        <h1 className="text-2xl font-bold text-center text-indigo-600 sm:text-5xl">Teknasyon Portal</h1>
                        <form onSubmit={loginAction} className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl border boder-gray-50">
                            <div>
                                <label className="text-sm font-medium">Email</label>

                                <div className="relative mt-1">
                                    <input
                                        width={50}
                                        type="email"
                                        name="email"
                                        className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm border"
                                        placeholder="Enter email"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium">Password</label>
                                <div className="relative mt-1">
                                    <input
                                        width={50}
                                        type="password"
                                        name="password"
                                        className="w-full p-4 pr-12 text-sm border border-gray-200 rounded-lg shadow-sm"
                                        placeholder="Enter password"
                                    />
                                </div>
                            </div>

                            <button
                                className="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-all duration-300 ease-in-out">
                                Sign in
                            </button>

                            <p className="text-sm text-center text-gray-500">
                                No account?
                                <Link to="/register" className="underline ml-2">
                                    Sign up
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Login
