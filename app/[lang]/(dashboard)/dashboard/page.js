'use client'
// import node module libraries
import { Fragment } from "react";
import Link from 'next/link';
import { Container, Col, Row } from 'react-bootstrap';
import {Briefcase} from "react-feather";

// import widget/custom components
import { StatRightTopIcon } from "@/widgets";

// import sub components
import { ActiveProjects, Teams,
    TasksPerformance
} from "@/sub-components";
import dynamic from "next/dynamic";



const Home = () => {
    return (
        <Fragment>
            <div className="bg-primary pt-10 pb-21"></div>
            <Container fluid className="mt-n22 px-6">
                <Row>
                    <Col lg={12} md={12} xs={12}>
                        {/* Page header */}
                        <div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="mb-2 mb-lg-0">
                                    <h3 className="mb-0  text-white">Projects</h3>
                                </div>
                                <div>
                                    <Link href="#" className="btn btn-white">Create New Project</Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                        <Col xl={3} lg={6} md={12} xs={12} className="mt-6" >
                            <StatRightTopIcon info={  {
                                id:1,
                                title : "Projects",
                                value : 18,
                                icon: <Briefcase size={18}/>,
                                statInfo: '<span className="text-dark me-2">2</span> Completed'
                            }} />
                        </Col>

                </Row>

                {/* Active Projects  */}
                <ActiveProjects />

                <Row className="my-6">
                    <Col xl={4} lg={12} md={12} xs={12} className="mb-6 mb-xl-0">

                        {/* Tasks Performance  */}
                        <TasksPerformance />

                    </Col>
                    {/* card  */}
                    <Col xl={8} lg={12} md={12} xs={12}>

                        {/* Teams  */}
                        <Teams />

                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
export default dynamic(() => Promise.resolve(Home), { ssr: false });
