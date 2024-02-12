// import { CustomSession, authOptions } from "../../../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function AdminDashboard() {
    // const session= await getServerSession(authOptions)


    return (
        <>
            <p>Admin Dashboard</p>
            {/* {session ? <p>{JSON.stringify(session)}</p> : "No Active Session"} */}

        </>

    )
}