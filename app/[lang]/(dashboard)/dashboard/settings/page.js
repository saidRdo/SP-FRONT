'use client'
// import node module libraries
import {Container, Spinner} from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import { Notifications, GeneralSetting, EmailSetting, Preferences } from 'sub-components'
import {useDictionary} from "@/components/DictionaryProvider/DictionaryProvider";
import {useSession} from "next-auth/react";

const Settings = () => {
    const dictionary = useDictionary();
    const {data:session}=useSession()

    if (!session){
        return (
            <div className="d-flex justify-content-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        )
    }

    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="General" />

            {/* General Settings */}
            <GeneralSetting lang={dictionary} user={session?.user?.admin}/>

            {/* Email Settings */}
             <EmailSetting lang={dictionary} userEmail={session?.user?.admin?.user?.email}/>

            {/* Settings for Preferences */}
            <Preferences lang={dictionary}/>

            {/* Settings for Notifications */}
            {/* <Notifications /> */}

        </Container>
    )
}

export default Settings