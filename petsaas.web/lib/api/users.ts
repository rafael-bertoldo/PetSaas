import { api } from "./client"

export interface CreateUserRequest {
    email: string
    password: string
    firstName: string
    lastName: string
}

export interface UserResponse {
    id: string
    email: string
    firstName: string
    lastName: string
    active: boolean
    lastLoginAt: string | null
    createdAt: string
    updatedAt: string
}

export async function createUser(request: CreateUserRequest) {
    const response = await api.post<UserResponse>("/users", request)

    return response.data
}