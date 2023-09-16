'use client'
// import node module libraries
import { Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import { Notifications, GeneralSetting, EmailSetting, Preferences } from 'sub-components'
import {useDictionary} from "@/components/DictionaryProvider/DictionaryProvider";

const Settings = () => {
    const dictionary = useDictionary();

    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="General" />

            {/* General Settings */}
            <GeneralSetting lang={dictionary} />

            {/* Email Settings */}
             <EmailSetting lang={dictionary} />

            {/* Settings for Preferences */}
            <Preferences lang={dictionary} />

            {/* Settings for Notifications */}
            {/* <Notifications /> */}

        </Container>
    )
}

export default Settings