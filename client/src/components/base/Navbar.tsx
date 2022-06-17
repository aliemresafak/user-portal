import { Link } from "react-router-dom"
import { useAuth } from "../../hook"

const Navbar = () => {
    const { isLoggedIn, logout } = useAuth()
    return (
        <>
            <header className="w-full shadow-md">
                <div className="max-w-screen-xl p-4 mx-auto">
                    <div className="flex items-center justify-between space-x-4 lg:space-x-10">
                        <div className="flex lg:w-0 lg:flex-1">
                            <Link className="px-4 py-2 text-indigo-600 text-lg font-bold rounded-lg" to="/">
                                Teknasyon Portal
                            </Link>
                        </div>

                        <nav className="hidden space-x-8 text-sm font-medium sm:flex">
                            <Link to="/users" className="text-gray-500">Users</Link>
                            <Link to="/active" className="text-gray-500">Active Users</Link>
                        </nav>

                        <div className="items-center justify-end flex-1 hidden space-x-4 sm:flex">

                            {isLoggedIn ? (
                                <a onClick={logout} className="inline-block px-5 py-2 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-opacity-90 focus:outline-none">Logout</a>

                            ) : (
                                <>
                                    <Link to="/login">
                                        <a className="inline-block px-5 py-2 text-sm font-medium text-indigo-600 border border-indigo-600 rounded hover:bg-indigo-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring">
                                            Login
                                        </a>
                                    </Link>
                                    <Link to="/register">
                                        <a className="inline-block px-5 py-2 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-opacity-90 focus:outline-none">
                                            Sign up
                                        </a>
                                    </Link>

                                </>
                            )}
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Navbar