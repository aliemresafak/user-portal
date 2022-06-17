import { Server } from "http"
import express from "express"
import { Server as SocketServer } from "socket.io"
import cors from "cors"
import apiRouter from "./routers"
import { connectDb } from "./db"

const app = express()
const httpServer = new Server(app)
app.use(cors({
    origin: ["http://localhost:3000"]
}))


app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.use(apiRouter)

const socketServer = new SocketServer(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
})

const activeUsers = new Set()

socketServer.on("connection", socket => {

    socket.on("login", user => {
        // @ts-ignore
        socket.userId = user._id
        activeUsers.add({ ...socket, user })
        socketServer.emit("login", `${user.fullName} logged in`)
        socketServer.emit("login", activeUsers)
        socketServer.emit("active users", activeUsers)
    })

    socket.on("register", user => {
        activeUsers.add({ ...socket, user })
        socketServer.emit("register", `${user.fullName} signed up`)
    })

    socket.on("active users", async () => {
        console.log(await socketServer.allSockets())
        socketServer.emit("active", socketServer.allSockets())
    })

    socket.on("disconnect", () => {
        // @ts-ignore
        activeUsers.delete(socket.userId)
    })




})


httpServer.listen(4000, async () => {
    await connectDb()
    console.log("server run 4000.port")
})

export {
    socketServer
}
