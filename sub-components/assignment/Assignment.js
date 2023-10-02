import {Button, Card, Col, Form, Row} from "react-bootstrap";
import React, {Fragment, useState} from "react";
import MultipleSelectChip from "@/widgets/form-select/multi-select";
import CreateZone from "@/sub-components/dashboard/zone/CreateZone";
import {Dialog} from "primereact/dialog";
import CreateAgent from "@/sub-components/dashboard/CreateAgent";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import AgentList from "@/data/Agent/ListAgents";
import ZoneList from "@/data/Zones/ListZones";

function Assignment({agent,zones,from}){
    const [scrollShowZone, setScrollShowZone] = useState(false);

    switch (from){
        case "agent":
            return(
                <Col xl={12} lg={12} md={12} xs={12}>
                    <Card>
                        <Card.Body>
                            <Form>
                                <Row className="mb-3 align-items-center">
                                    <Form.Label className="col-sm-4" htmlFor="Agent">
                                        Agent
                                    </Form.Label>
                                    <Col md={8} xs={8}>
                                        <Form.Control type="text" value={agent} id="Agnet" disabled={true}/>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Label className="d-flex col-sm-4" htmlFor="Zone">
                                        Zone
                                        <Col className={"ml-2 mr-2"}>
                                            <Fragment>
                                                <Button className={"text-white btn-sm"} variant="primary" onClick={() => setScrollShowZone(!scrollShowZone)}>
                                                    +
                                                </Button>
                                                <Dialog header="Create new agent" visible={scrollShowZone} maximizable style={{ width: '50vw' }} onHide={() => setScrollShowZone(false)}>
                                                    <CreateZone/>
                                                </Dialog>
                                            </Fragment>
                                        </Col>
                                    </Form.Label>
                                    <Col md={8} xs={8} sm={12}>
                                        <MultipleSelectChip List={ZoneList} defaultZones={zones}/>
                                    </Col>
                                </Row>

                                {/*  className={`mt-4  ${lang?.lang==="ar"?"offset-rtl":''}`}   */}
                                <Col md={{ offset: 4, span: 8 }} xs={12} className={`mt-4`}>
                                    <Button variant="primary" className={"text-white"} type="submit">
                                        Assignment
                                    </Button>
                                </Col>
                            </Form>

                        </Card.Body>
                    </Card>
                </Col>
            )
        case "zone":
            return(
                <Col xl={12} lg={12} md={12} xs={12}>
                    <Card>
                        <Card.Body>
                            <Form>
                                <Row className="mb-3 align-items-center">
                                    <Form.Label className="col-sm-4" htmlFor="Agent">
                                        Agent
                                    </Form.Label>
                                    <Col md={8} xs={8}>
                                        <Autocomplete
                                            disablePortal
                                            id="Agent"
                                            options={AgentList}
                                            sx={{ width: 300 }}
                                            defaultValue={agent}
                                            renderInput={(params) => <TextField {...params} label="Agents" />}
                                        />
                                        <Col className={"ml-2 mr-2"}>
                                            <Fragment>
                                                <Button className={"text-white btn-sm"} variant="primary" onClick={() => setScrollShowZone(!scrollShowZone)}>
                                                    +
                                                </Button>
                                                <Dialog header="Create new agent" visible={scrollShowZone} maximizable style={{ width: '50vw' }} onHide={() => setScrollShowZone(false)}>
                                                    <CreateAgent/>
                                                </Dialog>
                                            </Fragment>
                                        </Col>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Label className="d-flex col-sm-4" htmlFor="Zone">
                                        Zone
                                    </Form.Label>
                                    <Col md={8} xs={8} sm={12}>
                                        <Form.Control type="text" value={zones} id="Zone" disabled={true}/>
                                    </Col>
                                </Row>

                                {/*  className={`mt-4  ${lang?.lang==="ar"?"offset-rtl":''}`}   */}
                                <Col md={{ offset: 4, span: 8 }} xs={12} className={`mt-4`}>
                                    <Button variant="primary" className={"text-white"} type="submit">
                                        Assignment
                                    </Button>
                                </Col>
                            </Form>

                        </Card.Body>
                    </Card>
                </Col>
            )
    }
}
export default Assignment;