'use client'
// import node module libraries
import { Col, Row, Container } from 'react-bootstrap';


// import sub components
import {
  ProfileHeader
} from '@/sub-components'
import {useSession} from "next-auth/react";
import dynamic from "next/dynamic";
import {useState} from "react";
import ParkingsTap from "@/sub-components/profile/tabs/Parkings";
import AgentTab from "@/sub-components/profile/tabs/Agent";
import {useDictionary} from "@/components/DictionaryProvider/DictionaryProvider";
import Overview from "@/sub-components/profile/tabs/Overview";
import ZoneTab from "@/sub-components/profile/tabs/Zone";
import CapteurTab from "@/sub-components/profile/tabs/Capteur";
import GuardianTab from "@/sub-components/profile/tabs/GuardianTab";

const Profile = () => {
  const {data:session,update}=useSession();
  const [tab,setTab]=useState(1);
  const dictionary = useDictionary();

    return (
    <Container fluid className="p-6">

      {/* Page Heading */}
        <Row>
            <Col lg={12} md={12} xs={12}>
                {/* Page header */}
                <div className="border-bottom pb-4 mb-4 ">
                    <h3 className="mb-0 fw-bold">
                        {tab === 1 && dictionary?.profileHeader?.tabs.overview }
                        {tab === 2 && dictionary?.profileHeader?.tabs.zones }
                        {tab === 3 && dictionary?.profileHeader?.tabs.agents }
                        {tab === 4 && dictionary?.profileHeader?.tabs.parking }
                        {tab === 5 && dictionary?.profileHeader?.tabs.guardian }
                        {tab === 6 && dictionary?.profileHeader?.tabs.capteur }
                    </h3>
                </div>
            </Col>
        </Row>

      {/* Profile Header  */}
      <ProfileHeader lang={dictionary} ChangeTab={setTab} CurrentTab={tab} user={session?.user?.admin}/>

      {/* content */}
      <div className="py-6">
        <Row>
          {(() => {
            switch(tab){
                case 1:
                    return <Overview user={session?.user} session={session} updateSession={update} lang={dictionary}/>;
                case 2:
                    return <ZoneTab lng={dictionary}/>;
                case 3:
                    return <AgentTab lng={dictionary} />;
                case 4:
                    return <ParkingsTap lng={dictionary} />;
                case 5:
                    return <GuardianTab lng={dictionary} />;
                case 6:
                    return <CapteurTab lng={dictionary} />;
              default:
                return null
            }
          })()}
        </Row>
      </div>

    </Container>
  )
}

export default dynamic(() => Promise.resolve(Profile), { ssr: false });