import { CustomSession, authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function AdminDashboard() {
    const session: CustomSession | null = await getServerSession(authOptions)
  
    return (
        <>
            <p>Admin Dashboard</p>
        </>

    )
}