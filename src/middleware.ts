import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { CustomUser } from "./app/api/auth/[...nextauth]/options";


export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    //* Public routes
    if (pathname == "/login" || pathname == "/admin") {
        return NextResponse.next()
    }

    const token = await getToken({ req: request }) 

    // const token = localStorage.getItem()

    //* Protected route for user
    const userProtectedRoutes = [ '/profile']

    //* Protected route for admin
    const amdinProtectedRoutes = ['/admin', '/admin/dashboard']

    if (token == null && (userProtectedRoutes.includes(pathname) || amdinProtectedRoutes.includes(pathname))) {
        return NextResponse.redirect(new URL('/login', request.url));
    }



    //* Get user from token
    const user: CustomUser | null = token?.user as CustomUser

    //* If user try to access admin routes
    if (userProtectedRoutes.includes(pathname) && user.role == "User") {
        return NextResponse.redirect(new URL('/admin', request.url))
    }

    //* If admin try to access admin routes
    if (amdinProtectedRoutes.includes(pathname) && user.role == "Admin") {
        return NextResponse.redirect(new URL('/login', request.url));

    }

}