import { api } from "./client"
import type { UserResponse } from "./users"

export interface LoginRequest {
    email: string
    password: string
}

export interface LoginResponse {
    expiresAt: string
    user: UserResponse
}

export async function login(request: LoginRequest) {
    const response = await api.post<LoginResponse>("/auth/login", request)

    return response.data
}

export async function getMe() {
    const response = await api.get<UserResponse>("/aut/me")

    return response.data
}