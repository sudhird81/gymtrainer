import { NextResponse } from 'next/server'

export function middleware(request) {
    console.log("executing middleware")
    const authToken = request.cookies.get('token')?.value
    console.log("cookie", authToken)

    if(request.nextUrl.pathname === "/api/login"){
        return;
    }
    const loggedInUserNotAccessPaths = 
    // request.nextUrl.pathname === '/sign-up' || 
    request.nextUrl.pathname === '/sign-in';


    if(loggedInUserNotAccessPaths){
        if(authToken){
           return NextResponse.redirect(new URL('/dashboard', request.url))
        }
    }else {
        if(!authToken){
            return NextResponse.redirect(new URL('/sign-in', request.url))
        }else {
            // verify 
        }
    }

    //   return NextResponse.redirect(new URL('/dashboard', request.url))
}

export const config = {
    matcher: ['/', '/api/:path*'],
}