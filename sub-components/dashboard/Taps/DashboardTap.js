import React from 'react'
import {Col, Row, Card} from 'react-bootstrap';
//import sub components
import Statistics from "@/sub-components/dashboard/Statistics";
import Claims from "@/sub-components/dashboard/Claims";
import LineChart from "@/sub-components/dashboard/charts/LineChart";
import BarChart from "@/sub-components/dashboard/charts/BarChart";
import PieChart from "@/sub-components/dashboard/charts/PieChart";

const DashboardTap  = (props) => {

    return (
    <React.Fragment>
        <Row>
            {/*  Line Chart && Bar Chart

                    <Col xl={4} lg={6} md={12} xs={12} className="mt-6">
                        <Card>
                            <Card.Body>
                                <div className="d-flex justify-content-evenly align-items-center mb-1">
                                    <LineChart/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>*/}

            <Col xl={4} lg={12} md={12} xs={12} className="mt-6">
                <Card>
                    <Card.Body>
                        <div className="d-flex justify-content-evenly align-items-center mb-1">
                            <BarChart/>
                        </div>
                        <hr/>
                        <div className="d-flex justify-content-evenly align-items-center mb-1">
                            <LineChart/>
                        </div>
                    </Card.Body>
                </Card>
            </Col>

            {/* Pie Chart  */}

            <Col xl={4} lg={12} md={12} xs={12} className="mt-6">
                <Card>
                    <Card.Body>
                        <div className="d-flex justify-content-evenly align-items-center mb-5">
                            <PieChart/>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col xl={4} lg={12} md={12} xs={12} className="mt-6">
                <Card>
                    <Card.Body>
                        <div className="d-flex justify-content-evenly align-items-center mb-1">
                            <BarChart/>
                        </div>
                        <hr/>
                        <div className="d-flex justify-content-evenly align-items-center mb-1">
                            <LineChart/>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

        {/* Table des Statistiques  */}
        <Statistics dictionary={props?.dictionary?.tables?.statistics}  />

        {/* Table des réclamations  */}
        <div className={"mb-4"}>
            <Claims dictionary={props?.dictionary?.tables?.claims} />
        </div>
    </React.Fragment>
    )
}
export default DashboardTap;
