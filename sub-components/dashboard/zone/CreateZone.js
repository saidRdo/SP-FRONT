import {Button, Col, Form, Row} from "react-bootstrap";
import { useLoadScript} from "@react-google-maps/api";
import {useState} from "react";
import Map from "@/sub-components/maps/maps";

const CreateZone = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBwqCCHiuZJJDAnxKiqWSDWzW5m8ty6QCc" // Add your API key
    });

    return (
            <Form>
                <Row className="mb-3">
                    <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="City">
                        City
                    </Form.Label>
                    <Col md={12} xs={12} sm={12}>
                        <Form.Control type="text" value={"Casablanca "} id="City" disabled={true}/>
                    </Col>
                </Row>
                {/* row */}
                <Row className="mb-3">
                    <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="name">
                        Name
                    </Form.Label>
                    <Col md={12} xs={12} sm={12}>
                        <Form.Control type="text" placeholder="Zone name" id="name" required />
                    </Col>
                </Row>
                {/* row */}
                <Row className="mb-3">
                    <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="name">
                        location
                    </Form.Label>
                </Row>
                <Row className={"mb-3"}>
                    <Col md={12} xs={12} sm={12}>
                        {isLoaded&&<Map/>}
                    </Col>
                </Row>
                {/*  className={`mt-4  ${lang?.lang==="ar"?"offset-rtl":''}`}   */}
                <Col md={{ offset: 4, span: 8 }} xs={12} className={`mt-4`}>
                    <Button variant="primary" className={"text-white"} type="submit">
                        Create
                    </Button>
                </Col>
            </Form>

    )
}
export default CreateZone;
