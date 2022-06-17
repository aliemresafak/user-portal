import { ReactNode } from "react"
import { ToastContainer } from "react-toastify"
import Navbar from "./Navbar"

interface Prop {
    children: ReactNode
}

const Layout = ({ children }: Prop) => {
    return (
        <>
            <div className="flex justify-center">
                <div className="flex flex-col h-screen w-screen items-center">
                    <Navbar />
                    <div className="w-4/5 px-20 py-10">
                        {children}
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Layout