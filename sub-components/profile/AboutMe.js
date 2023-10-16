// import node module libraries
import { Col, Row, Card } from 'react-bootstrap';

const AboutMe = ({user}) => {
    return (
        <Col xl={6} lg={12} md={12} xs={12} className="mb-6">
            {/* card */}
            <Card>
                {/* card body */}
                <Card.Body>
                    {/* card title */}
                    <Card.Title as="h4">Informations personnelles</Card.Title>
                    <Row>
                        <Col xs={6} className="mb-5">
                            <h6 className="text-uppercase fs-5 ls-2">User Name  </h6>
                            <p className="mb-0">{user?.user?.username}</p>
                        </Col>
                        <Col xs={6}>
                            <h6 className="text-uppercase fs-5 ls-2">Email </h6>
                            <p className="mb-0">{user?.user?.email}</p>
                        </Col>
                        <Col xs={6} className="mb-5">
                            <h6 className="text-uppercase fs-5 ls-2">Phone </h6>
                            <p className="mb-0">{user?.user?.phone}</p>
                        </Col>
                        <Col xs={6} className="mb-5">
                            <h6 className="text-uppercase fs-5 ls-2">City</h6>
                            <p className="mb-0">{user?.city?.name}</p>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default AboutMe