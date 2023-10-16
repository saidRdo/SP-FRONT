import { getServerSession } from 'next-auth/next';
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {redirect} from "next/navigation";
import UnauthorizedAccessPage from "@/sub-components/ErrorsPages/403";

export default async function LayoutRoot({ children }) {
    const session = await getServerSession(authOptions);
    if (!session){
        return redirect("/sign-in")
    }else if(!session?.user?.admin){
        return <UnauthorizedAccessPage/>;
    }
    return <div>{children}</div>;
}
