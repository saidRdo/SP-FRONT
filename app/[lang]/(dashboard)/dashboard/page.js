'use client'
// import node module libraries
import {Fragment, useState} from "react";
import {Container, Col, Row, Card} from 'react-bootstrap';

// import sub components
import dynamic from "next/dynamic";
import {useDictionary} from "@/components/DictionaryProvider/DictionaryProvider";
import {ContentHeader} from "@/sub-components/dashboard/ContentHeader";

import Link from "next/link";
import DashboardTap from "@/sub-components/dashboard/Taps/DashboardTap";
import {useSession} from "next-auth/react";
import ClaimsTap from "@/sub-components/dashboard/Taps/ClaimsTap";
import StatisticsTap from "@/sub-components/dashboard/Taps/StatisticsTap";


const Home = () => {
    const dictionary = useDictionary();
    const [NextTap,setNextTap]=useState(1);
    const {data:session}=useSession();

    return (
        <Fragment>
            <div className="bg-dashboard-header pt-10 pb-16"></div>
            <Container fluid className="mt-n22 px-6">
                <Row>
                    <Col lg={12} md={12} xs={12}>
                        {/* Page header */}
                        <div>
                            <ContentHeader dictionary={dictionary} AdminCity={session?.user?.admin?.city}/>
                        </div>
                    </Col>
                    <Col lg={12} md={12} xs={12} as={"div"} className={"bg-white rounded-bottom smooth-shadow-sm"} style={
                        {
                            marginTop:"10px"
                        }
                    }>
                        <ul className="nav nav-lt-tab" id="pills-tab" role="tablist">
                            <li className="nav-item">
                                <Link className={`nav-link ${NextTap===1?"active":""}`} href="#" onClick={(event)=> {
                                    event.preventDefault();
                                    setNextTap(1)
                                }}>{dictionary?.contentHeader?.tabs?.dashboard}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${NextTap===2?"active":""}`} href="#" onClick={(event)=> {
                                    event.preventDefault();
                                    setNextTap(2)
                                }}>{dictionary?.contentHeader?.tabs?.claims}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${NextTap===3?"active":""}`} href="#" onClick={(event)=> {
                                    event.preventDefault();
                                    setNextTap(3)
                                }}>{dictionary?.contentHeader?.tabs?.statistics}</Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
                {(() => {
                    switch(NextTap){
                        case 1:
                            return <DashboardTap dictionary={dictionary} />;
                        case 2:
                            return <ClaimsTap dictionary={dictionary} />;
                        case 3:
                            return <StatisticsTap dictionary={dictionary} />;
                        default:
                            return null
                    }
                })()}

            </Container>
        </Fragment>
    )
}

export default dynamic(() => Promise.resolve(Home), { ssr: false });