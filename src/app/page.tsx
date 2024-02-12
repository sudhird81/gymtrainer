import { getServerSession } from "next-auth";
import { CustomSession, authOptions } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import MainLayout from "@/components/MainLayout/MainLayout";


export default async function Home() {
  const session: CustomSession | null = await getServerSession(authOptions)

  if (!session) {
    redirect("/login");
  }

  return (
    <>

      {session ? <p>{JSON.stringify(session)}</p> : "No Active Session"}
      <MainLayout />
    </>
  );
}
