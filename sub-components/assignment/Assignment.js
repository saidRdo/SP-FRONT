import {Button, Card, Col, Form, Row, Spinner} from "react-bootstrap";
import React, {Fragment, useEffect, useState} from "react";
import CreateZone from "@/sub-components/dashboard/zone/CreateZone";
import {Dialog} from "primereact/dialog";
import CreateAgent from "@/sub-components/dashboard/CreateAgent";
import { MultiSelect } from 'primereact/multiselect';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import fetchZones from "@/data/Zones/ZoneDataList";
import AgentOptions from "@/data/Agent/AgentOptions";


function Assignment({agent,zones,from,cityID}){
    const [scrollShowZone, setScrollShowZone] = useState(false);
    const [selectedZone, setSelectedZone] = useState(zones?zones:0);
    const [selectedAgent, setSelectedAgent] = useState('');
    const [ZoneOptions,setOptions]=useState([]);
    const [loading,setloading]=useState(true)
    const [AgentOption,setAgentOptions]=useState([]);


    if (cityID){
        fetchZones(cityID)
            .then(zones=>{
                if (zones){
                    setloading(false)
                    return setOptions(zones.map(zone=>{
                        return {value:zone.id, label:zone.name}
                    }))
                }
            })
            .catch(error=>console.error("axios catch",error));
    }

    useEffect(() => {
        AgentOptions().then(resp=>setAgentOptions(resp)).catch(error=>console.error(error))
    }, []);

    switch (from){
        case "agent":
            return(
                    <Card>
                        <Card.Body>
                            <Form>
                                <Row className="mb-3 align-items-center">
                                    <Form.Label className="col-sm-4" htmlFor="Agent">
                                        Agent
                                    </Form.Label>
                                    <Col md={12} xs={12}>
                                        <Form.Control type="text" value={agent} id="Agnet" disabled={true}/>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Label className="d-flex col-sm-4" htmlFor="Zone">
                                        Zone
                                        <Col className={"ml-2 mr-2"} md={12} xs={12} sm={12}>
                                            <Button className={"text-white btn-sm"} variant="primary" onClick={() => setScrollShowZone(!scrollShowZone)}>
                                                +
                                            </Button>
                                            <Dialog header="Create new zone" style={{width:"100vh"}} visible={scrollShowZone} maximizable onHide={() => setScrollShowZone(false)}>
                                                <CreateZone/>
                                            </Dialog>
                                        </Col>
                                    </Form.Label>
                                    <Col md={12} xs={12} sm={12}>
                                        {
                                            loading ?
                                                <div className="d-flex justify-content-center">
                                                    <Spinner animation="border" role="status">
                                                        <span className="visually-hidden">Loading...</span>
                                                    </Spinner>
                                                </div>
                                                :
                                                <MultiSelect value={zones} onChange={(e) => setSelectedZone(e.value)} options={ZoneOptions} optionLabel="label" display="chip"
                                                             placeholder="Select zone" style={{width:"100%"}} />
                                        }

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
                                            <Fragment>
                                                <Button className={"text-white btn-sm ml-4"} variant="primary" onClick={() => setScrollShowZone(!scrollShowZone)}>
                                                    +
                                                </Button>
                                                <Dialog header="Create new agent"  style={{width:"100vh"}} visible={scrollShowZone} maximizable onHide={() => setScrollShowZone(false)}>
                                                    <CreateAgent/>
                                                </Dialog>
                                            </Fragment>
                                    </Form.Label>
                                    <Col md={8} xs={12} sm={12}>
                                        <Autocomplete
                                            disablePortal
                                            id="Agent"
                                            options={AgentOption}
                                            defaultValue={agent}
                                            renderInput={(params) => <TextField {...params} label="Agent" />}
                                        />
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Label className="d-flex col-sm-4" htmlFor="Zone">
                                        Zone
                                    </Form.Label>
                                    <Col md={8} xs={12} sm={12}>
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