"use client"
// This hook is used to fix React Hydration Error on any page
// import node module libraries
import { useState, useEffect } from 'react';
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";

const useMounted = () => {
    const [hasMounted, setHasMounted] = useState(false);
	const {data:session}=useSession()
	const router=useRouter()

	useEffect(() => {
		setHasMounted(true);
	}, []);

	return hasMounted;
};

export default useMounted;
