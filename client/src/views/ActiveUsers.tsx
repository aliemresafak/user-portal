import { useEffect, useState } from "react"
import { Layout } from "../components/base"
import { useSocket } from "../hook"
import { IUser } from "../interfaces"

const ActiveUsers = () => {
    const { socket, activeUsers } = useSocket()
    socket.on("active users", (activeUsers) => console.log(activeUsers))
    return (
        <Layout>ActiveUsers</Layout>
    )
}

export default ActiveUsers