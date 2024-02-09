import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export default function Home() {
  
  const session = getServerSession(authOptions)
  if (!session) {
    redirect('/login')
  }
  return (
    <>
    <p>Home</p>
    <p>{JSON.stringify(session)}</p>
    </>

  )
}