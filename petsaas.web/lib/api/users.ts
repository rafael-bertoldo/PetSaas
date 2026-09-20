import { api } from "./client"

export interface CreateUserRequest {
    email: string
    password: string
    firstName: string
    lastName: string
}

export async function createUser(request: CreateUserRequest) {
    const response = await api.post("/users", request)

    return response.data
}