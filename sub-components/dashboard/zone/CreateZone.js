import {Button, Card, Col, Form, Image, Row} from "react-bootstrap";
import {FormSelect} from "@/widgets";
import {useState} from "react";

const CreateZone = () => {


    return (
        <Card>
            {/* card body */}
            <Card.Body>
                <div>
                    <Form>
                        <Row className="mb-3">
                            <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="City">
                                City
                            </Form.Label>
                            <Col md={8} xs={12}>
                                <Form.Control type="text" value={"Casablanca "} id="City" disabled={true}/>
                            </Col>
                        </Row>
                        {/* row */}
                        <Row className="mb-3">
                            <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="name">
                                Name
                            </Form.Label>
                            <Col md={8} xs={12}>
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
                            <Col md={12} xs={12}>
                                <iframe width="100%" height="350" src="https://www.openstreetmap.org/export/embed.html?bbox=-10.016784667968752%2C31.80289258670676%2C-7.187805175781251%2C33.16284622181143&amp;layer=mapnik&amp;marker=32.48543842743153%2C-8.602294921875" ></iframe><br/><small><a href="https://www.openstreetmap.org/?mlat=32.4854&amp;mlon=-8.6023#map=9/32.4854/-8.6023">View Larger Map</a></small>
                            </Col>
                        </Row>
                        {/*  className={`mt-4  ${lang?.lang==="ar"?"offset-rtl":''}`}   */}
                        <Col md={{ offset: 4, span: 8 }} xs={12} className={`mt-4`}>
                            <Button variant="primary" className={"text-white"} type="submit">
                                Create
                            </Button>
                        </Col>
                    </Form>

                </div>
            </Card.Body>
        </Card>
    )
}
export default CreateZone;
