import users from "@/helpers/constants";
import { AuthOptions, ISODateString } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import { useRouter } from "next/navigation";

export type CustomSession = {
  user?: CustomUser;
  expires: ISODateString;
};

export type CustomUser = {
  id?: string | null;
  username?: string | null;
  email?: string | null;
  role?: string | null;
  password?: string | null;

  // avatar?: string | null;
};

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/login",
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

    async jwt({ token, user }: { token: JWT; user: CustomUser }) {
      if (user) {
        user.role = user?.role == null ? "User" : user?.role;
        token.user = user;
      }
      return token;
    },

    async session({
      session,
      user,
      token,
    }: {
      session: CustomSession;
      token: JWT;
      user: CustomUser;
    }) {
      session.user = token.user as CustomUser;
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      name: "next auth",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter username",
        },
        // email: { label: "Email", type: "email", placeholder: "Enter your email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter password",
        },
      },

      async authorize(credentials, req) {
        console.log(credentials, "credentials");
        const user = await users.find(
          (item) => item.username == credentials?.username
        );

        if (user) {
          console.log("user", user);
          if (!credentials || !credentials.username || !credentials.password) {
            console.log("Credentials not found");
            return null;
          } else {
            if (
              credentials?.username === user.username &&
              credentials?.password === user?.password
            ) {
              console.log("Credentials correct");
              return user;
            } else {
              console.log("Check your credentials");
              return null;
            }
          }
        } else {
          console.log("user not found");
          return null;
        }

        // if(!credentials || !credentials.username || !credentials.password ){
        //     return null;

        // }

        // const user = users.find((item)=> item.username === credentials.username)
        // console.log("user-------------------------", user);
        // if(user?.password === credentials.password || user?.username === credentials.username){
        //     return user;
        // }
        // return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
