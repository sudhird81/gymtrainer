import { AuthOptions, ISODateString } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";


export type CustomSession = {
    user?: CustomUser;
    expires: ISODateString
}

export type CustomUser = {
    id?: string | null;
    name?: string | null;
    email?: string | null;
    role?: string | null;
    avatar?: string | null;


}

export const authOptions: AuthOptions = {

    pages: {
        signIn: '/login',

    },
    callbacks: {
        // async signIn({ account, profile, email, credentials }) {
        //     const user = {
        //         username: "kminchelle",
        //         password: "0lelplR"
        //     }

        //     try {
        //         if (user) {
        //             return true
        //         }
        //     } catch (error) {
        //         console.log("error", error)

        //     }

        // },
        async session({ session, token, user }:{session:CustomSession, token: JWT, user:CustomUser}) {
           
           session.user = token.user as CustomUser;
            return session
        },
        async jwt({ user, token }: {token: JWT, user:CustomUser}) {
            if (user) {
                user.role= user?.role == null ? "User" : user?.role;
                token.user = user;
            }
            return token
        },
    },
    providers: [
        CredentialsProvider({
            name: "next auth",
            credentials: {
                username: { label: "Username", type: "email", placeholder: "kminchelle" },
                password: { label: "Password", type: "password" }
            },

            async authorize(credentials, req) {
                const user = {
                    id: "15",
                    username: "kminchelle",
                    password: "0lelplR"
                }



                return user



                // for database user

                // const user = {
                //     id: "15",    //dynamic user from db
                //     username: "kminchelle",
                //     password: "0lelplR"
                // }

                // if (user) {
                //     return user
                // } else {
                //     return null

                // }
            }

        })
    ]
}