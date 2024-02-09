import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { CustomUser } from "./app/api/auth/[...nextauth]/options";


export async function middleware(request: NextRequest) {
    console.log("middleware executed")
    const { pathname } = request.nextUrl

    //* Public routes
    if (pathname == "/login" || pathname == "/admin") {
        console.log("hereee")
        return NextResponse.next()
    }else {
        console.log(" am here  ")

    }

    const token = await getToken({ req: request }) 


    //* Protected route for user
    const userProtectedRoutes = ['/', '/profile']

    
    //* Protected route for admin
    const adminProtectedRoutes = ['/admin', '/admin/dashboard']



    if (token == null && (userProtectedRoutes.includes(pathname) || adminProtectedRoutes.includes(pathname))) {
        console.log("here 1")
        return NextResponse.redirect(
          new URL("/login",request.url));
        }
    
    //* Get user from token
    const user: CustomUser | null = token?.user as CustomUser

    //* If user try to access admin routes
    if (userProtectedRoutes.includes(pathname) && user.role == "User") {
        console.log("here 2")

        return NextResponse.redirect(new URL('/login', request.url))
    }

    //* If admin try to access admin routes
    if (adminProtectedRoutes.includes(pathname) && user.role == "Admin") {
        console.log("here 3")

        return NextResponse.redirect(new URL('/admin', request.url));

    }

}