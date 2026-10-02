"use client"

import { useQuery } from "@tanstack/react-query"
import { getMe } from "@/lib/api/auth"

export function useAuth() {
    const query = useQuery({
        queryKey: ["auth", "me"],
        queryFn: getMe,
        retry: false,
        staleTime: 5 * 60 * 1000
    })

    return {
        ...query,
        user: query.data,
        isAuthenticated: query.isSuccess
    }
}