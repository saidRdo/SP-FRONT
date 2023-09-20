'use client'
// import node module libraries
import { Fragment } from "react";
import {Container, Col, Row, Card} from 'react-bootstrap';

// import sub components
import dynamic from "next/dynamic";
import {useDictionary} from "@/components/DictionaryProvider/DictionaryProvider";
import LineChart from "@/sub-components/dashboard/charts/LineChart";
import BarChart from "@/sub-components/dashboard/charts/BarChart";
import PieChart from "@/sub-components/dashboard/charts/PieChart";
import {ContentHeader} from "@/sub-components/dashboard/ContentHeader";
import Statistics from "@/sub-components/dashboard/Statistics";
import Claims from "@/sub-components/dashboard/Claims";



const Home = () => {
    const dictionary = useDictionary();

    return (
        <Fragment>
            <div className="bg-dashboard-header pt-10 pb-21"></div>
            <Container fluid className="mt-n22 px-6">
                <Row>
                    <Col lg={12} md={12} xs={12}>
                        {/* Page header */}
                        <div>
                            <ContentHeader/>
                        </div>
                    </Col>


                    {/*  Line Chart && Bar Chart */}

                    <Col xl={4} lg={6} md={12} xs={12} className="mt-6">
                        <Card>
                            <Card.Body>
                                <div className="d-flex justify-content-evenly align-items-center mb-3 p-2">
                                    <LineChart/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} lg={6} md={12} xs={12} className="mt-6">
                        <Card>
                            <Card.Body>
                                <div className="d-flex justify-content-evenly align-items-center mb-3 p-2">
                                    <BarChart/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Pie Chart  */}

                    <Col xl={4} lg={12} md={12} xs={12} className="mt-6">
                        <Card>
                            <Card.Body>
                                <div className="d-flex justify-content-evenly align-items-center mb-3 p-2">
                                    <PieChart/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>


                </Row>

                {/* Table des Statistiques  */}
                <Statistics />

                {/* Table des réclamations  */}
                <div className={"mb-4"}>
                    <Claims />
                </div>

            </Container>
        </Fragment>
    )
}
export default dynamic(() => Promise.resolve(Home), { ssr: false });
