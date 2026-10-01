import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl
    const accessToken = request.cookies.get("access_token")

    const isAuthenticated = Boolean(accessToken)

    const isDashboardRoute = pathname.startsWith("/dashboard")
    const isAuthRoute = pathname === "/login" || pathname === "/register"

    if (isDashboardRoute && !isAuthenticated) {
        return NextResponse.redirect(
            new URL("/login", request.url)
        )
    }

    if (isAuthRoute && isAuthenticated) {
        return NextResponse.redirect(
            new URL("/dashboard", request.url)
        )
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        "/dashboard/:path*",
        "/login",
        "/register"
    ]
}