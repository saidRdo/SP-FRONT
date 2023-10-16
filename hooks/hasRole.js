import { useSession } from 'next-auth/react';
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import UnauthorizedAccessPage from "@/sub-components/ErrorsPages/403";

export function hasRole(hasrole) {
    const {data:session} = useSession()

    useEffect(() => {
        const role=session?.user?.admin?.user?.roles?.some(r=>r.name === hasrole)
        if (!role) {
            return <UnauthorizedAccessPage />
        }
    }, []);
    return true;
}