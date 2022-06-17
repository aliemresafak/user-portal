import { useEffect, useState } from "react"
import { io } from "socket.io-client"
import './App.css';


function App() {
  const socket = io("http://localhost:4000", {
    reconnection: false
  })
  const [email, setEmail] = useState<string>("enscim@gmail.com")
  const [password, setPassword] = useState<string>("123")

  const loginAction = async (e: any) => {
    e.preventDefault()
    const data = JSON.stringify({ email, password })
    const url = "http://localhost:4000/auth/login"
    const headers = { "Content-Type": "application/json" }
    const response = await fetch(url, { method: "POST", body: data, headers })
    const result = await response.json()
    if (result.success) {
      socket.emit("login", data)
    }
  }
  socket.on("connect", () => {
    console.log(socket)
  })

  socket.on("login", message => {
    console.log(message)
  })

  return (
    <div>
      Teknasyon Portal
      <div>Email <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
      <div>Password <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} /></div>
      <button onClick={loginAction}>Login</button>
    </div>
  );
}

export default App;
