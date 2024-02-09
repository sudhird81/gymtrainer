import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import MainLayout from "@/components/MainLayout/MainLayout";

export default function Home() {

  const session = getServerSession(authOptions)
  if (!session) {
    redirect('/login')
  }
  return (
    <>

      {/* <p>{JSON.stringify(session)}</p> */}
      <MainLayout />
    </>

  )
}