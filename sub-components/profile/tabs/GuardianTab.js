import React, {useState} from 'react'
//import sub components
import dynamic from "next/dynamic";
import {Col, Row, Card} from 'react-bootstrap';


const GuardianTab  = (props) => {
    return (
        <Row className="mt-6">
            <Col md={12} xs={12}>
                <Card>
                    <Card.Header className="d-flex justify-content-between align-items-center flex-row-reverse bg-white">
                        Guardian Tab
                    </Card.Header>
                    <Card.Body>
                        Guardin Tab
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}
export default dynamic(() => Promise.resolve(GuardianTab), { ssr: false });