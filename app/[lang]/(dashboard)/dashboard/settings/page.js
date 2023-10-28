'use client'
// import node module libraries
import {Container, Spinner} from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import { Notifications, GeneralSetting, EmailSetting, Preferences } from 'sub-components'
import {useDictionary} from "@/components/DictionaryProvider/DictionaryProvider";
import {useSession} from "next-auth/react";
import dynamic from "next/dynamic";

const Settings = () => {
    const dictionary = useDictionary();
    const {data:session}=useSession()


    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="General" />

            {/* Email Settings */}
            <EmailSetting lang={dictionary} user={session?.user}/>

            {/* Settings for Preferences */}
            <Preferences lang={dictionary}/>

            {/* Settings for Notifications */}
            {/* <Notifications /> */}

        </Container>
    )
}

export default dynamic(() => Promise.resolve(Settings), { ssr: false });