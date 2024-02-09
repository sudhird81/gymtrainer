import users from "@/helpers/constants";
import { AuthOptions, ISODateString } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import { useRouter } from "next/navigation";

export type CustomSession = {
    user?: CustomUser;
    expires: ISODateString
}

export type CustomUser = {
    id?: string | null;
    username?: string | null;
    email?: string | null;
    role?: string | null;
    password?: string | null;

    // avatar?: string | null;


}

export const authOptions: AuthOptions = {

    pages: {
        signIn: '/login',

    },
    callbacks: {
        // async signIn({ account, profile, email, credentials }) {
        //     const user = users.find((item)=> item.username === credentials?.username)


        //     try {
        //         if (user) {
        //             console.log("userrr", user);
        //             return true
        //         }
        //     } catch (error) {
        //         console.log("error", error)

        //     }
        //     return true

        // },
        async session({ session, token, user }:{session:CustomSession, token: JWT, user:CustomUser}) {
           
           session.user = token.user as CustomUser;
            return session
        },
        async jwt({ user, token }: {token: JWT, user:CustomUser}) {
            if (user) {
                user.role= user?.role == null ? "user" : user?.role;
                token.user = user;
            }
            return token
        },
    },
    providers: [
        CredentialsProvider({
            name: "next auth",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "user1" },
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }

            },

            async authorize(credentials, req) {
                if(!credentials || !credentials.username || !credentials.password ){
                    return null;

                }
               
                const user = users.find((item)=> item.username === credentials.username)
                console.log("user-------------------------", user);
                if(user?.password === credentials.password || user?.username === credentials.username){
                    return user;
                }
                return null;


            }

        })
    ],
    secret: process.env.NEXTAUTH_SECRET
}