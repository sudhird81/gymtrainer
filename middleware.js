import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { CustomUser } from "./api/auth/[...nextauth]/options";
// import { i18nRouter } from "next-i18n-router";
// import i18nConfig from "../i18nConfig";

export async function middleware(request) {
  console.log("middleware executed");

  // const { pathname } = request.nextUrl;

  // //* Public routes
  // if (pathname == "/login" || pathname == "/admin") {
  //   console.log("hereee");
  //   return NextResponse.next();
  // }

  // const token = await getToken({ req: request });

  // // console.log("token", token)

  // //* Protected route for user
  // const userProtectedRoutes = ["/", "/profile"];

  // //* Protected route for admin
  // const adminProtectedRoutes = ["/admin", "/admin/dashboard"];

  // if (
  //   token == null &&
  //   (userProtectedRoutes.includes(pathname) ||
  //     adminProtectedRoutes.includes(pathname))
  // ) {
  //   console.log("token null and tried to access route");
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

  // //* Get user from token
  // const user: CustomUser | null = token?.user as CustomUser;

  // //* If user try to access admin routes
  // if (adminProtectedRoutes.includes(pathname) && user.role == "User") {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

  // //* If admin try to access admin routes
  // if (userProtectedRoutes.includes(pathname) && user.role == "Admin") {
  //   return NextResponse.redirect(new URL("/admin", request.url));
  // }
}

// export function middleware(request: any) {
//   return i18nRouter(request, i18nConfig);
// }

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
