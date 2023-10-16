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
                            <ContentHeader AdminCity={session?.user?.admin?.city}/>
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
                                }}>Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${NextTap===2?"active":""}`} href="#" onClick={(event)=> {
                                    event.preventDefault();
                                    setNextTap(2)
                                }}>Tab2</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${NextTap===3?"active":""}`} href="#" onClick={(event)=> {
                                    event.preventDefault();
                                    setNextTap(3)
                                }}>Tab3</Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
                {(() => {
                    switch(NextTap){
                        case 1:
                            return <DashboardTap/>;
                        case 2:
                            return <h1>Tab 2</h1>;
                        case 3:
                            return <h1>Tab 3</h1>
                        default:
                            return null
                    }
                })()}

            </Container>
        </Fragment>
    )
}

export default dynamic(() => Promise.resolve(Home), { ssr: false });