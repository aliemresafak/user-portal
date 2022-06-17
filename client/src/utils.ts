import { toast } from "react-toastify"

const API_BASE_URL = "http://localhost:4000"
export const generateApiUrl = (endpoint: string) => `${API_BASE_URL}/${endpoint}`

export enum RequestMethod {
    GET = "GET",
    POST = "POST"
}

export const request = async (requestMethod: RequestMethod, url: string, data?: string) => {
    const headers = {"Content-Type": "application/json" }
    const options: RequestInit = {
        method: requestMethod, 
        mode: "cors",
        body: data, 
        headers
    }
    const response = await fetch(url, options)
    return response.json()
}

export const sendNotification = (message: string) => toast(message)