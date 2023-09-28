"use client"
import {Button, Card, Col, Container, Form, Modal, Row} from "react-bootstrap";
import React, {Fragment, useState} from "react";
import CreateZone from "@/sub-components/dashboard/zone/CreateZone";
import {FormSelect} from "@/widgets";
import MultipleSelectChip from "@/widgets/form-select/multi-select";
import CreateAgent from "@/sub-components/dashboard/CreateAgent";
import useMounted from "@/hooks/useMounted";


export default function Assignment(){
    const hasMounted= useMounted()
    const [scrollShow, setScrollShow] = useState(false);
    const [scrollShowZone, setScrollShowZone] = useState(false);

    const AgentsOptions = [
        { value: 'agent1', label: 'SAID' },
        { value: 'agent2', label: 'HASSAN' },
        { value: 'agent3', label: 'OMAR' }
    ];
    const ZoneList = [
        "Bouskoura",
        "Sidi Maarouf",
        "Derb sultan",
        "Hay el Mohammadi"
    ];


    return(
        <Container fluid className="p-6">
            <Row className="mt-5 ml-5 mr-5 justify-content-center">
                {
                    hasMounted ?
                        <Col xl={12} lg={12} md={12} xs={12}>
                            <Card className={"ml-5 mr-5"}>
                                <Card.Header className="bg-white py-4 d-flex justify-content-between align-items-center">
                                    <h4>Nommer un agent</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Form>
                                        <Row className="mb-3 align-items-center">
                                            <Form.Label className="col-sm-4" htmlFor="Agent">
                                                Agent
                                            </Form.Label>
                                            <Col md={4} xs={8}>
                                                <Form.Control as={FormSelect} placeholder="Sélectionnez l'agent" id="Agent" options={AgentsOptions} />
                                            </Col>
                                            <Col md={4} xs={4}>
                                                <Fragment>
                                                    <Button className={"text-white btn-sm"} variant="primary" onClick={() => setScrollShow(!scrollShow)}>
                                                        +
                                                    </Button>
                                                    <Modal show={scrollShow} onHide={() => setScrollShow(!scrollShow)}>
                                                        <Modal.Header closeButton>
                                                            <Modal.Title>Create new agent</Modal.Title>
                                                        </Modal.Header>
                                                        <Modal.Body >
                                                            <CreateAgent/>
                                                        </Modal.Body>
                                                    </Modal>
                                                </Fragment>
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-4" htmlFor="Zone">
                                                Zone
                                            </Form.Label>
                                            <Col md={4} xs={8} sm={12}>
                                                <MultipleSelectChip List={ZoneList}/>
                                            </Col>
                                            <Col md={4} xs={4} sm={12}>
                                                <Fragment>
                                                    <Button className={"text-white btn-sm"} variant="primary" onClick={() => setScrollShowZone(!scrollShowZone)}>
                                                        +
                                                    </Button>
                                                    <Modal show={scrollShowZone} onHide={() => setScrollShowZone(!scrollShowZone)}>
                                                        <Modal.Header closeButton>
                                                            <Modal.Title>Create new zone</Modal.Title>
                                                        </Modal.Header>
                                                        <Modal.Body >
                                                            <CreateZone/>
                                                        </Modal.Body>
                                                    </Modal>
                                                </Fragment>
                                            </Col>
                                        </Row>

                                        {/*  className={`mt-4  ${lang?.lang==="ar"?"offset-rtl":''}`}   */}
                                        <Col md={{ offset: 4, span: 8 }} xs={12} className={`mt-4`}>
                                            <Button variant="primary" className={"text-white"} type="submit">
                                                Create
                                            </Button>
                                        </Col>
                                    </Form>

                                </Card.Body>
                            </Card>
                        </Col>
                    : <p> Laoding ...</p>
                }
            </Row>
        </Container>
    )
}