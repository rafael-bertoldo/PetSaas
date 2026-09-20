import axios from "axios"

export const api = axios.create({
    baseURL: "/api",
    headers: {
        "Content-type": "application/json"
    }
})