import { ToastContainer } from "react-toastify"
import { Layout } from "../components/base"
import { useAuth, useSocket } from "../hook"
import { sendNotification } from "../utils"
const Home = () => {
    const auth = useAuth()
    const { socket } = useSocket()
    socket.on("login", message => sendNotification(message))
    socket.on("register", message => sendNotification(message))
    return (
        <Layout>
            Home
            <ToastContainer />
        </Layout>
    )
}

export default Home