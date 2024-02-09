import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import MainLayout from "@/components/MainLayout/MainLayout";

export default function Home() {
  const session = getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  const data = getServerSession(authOptions)

  return (
    <>

      <p>{JSON.stringify(data)}</p>
      <MainLayout />
    </>
  );
}
