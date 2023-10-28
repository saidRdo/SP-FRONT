// import node module libraries
import { Col, Row, Card } from 'react-bootstrap';
import EditProfile from "@/sub-components/profile/edit-profile/EditProfile";
import {maskPhoneNumber} from "@/utils/maskphonenumber";

const AboutMe = ({lang,user,updateSession,session}) => {
    return (
        <Col xl={12} lg={12} md={12} xs={12} className="mb-6">
            {/* card */}
            <Card>
                {/* card body */}
                <Card.Body>
                    {/* card title */}
                    <Card.Title as="h4">{lang?.overviewTab.title}</Card.Title>
                    <Col xs={6} className="mb-5">
                        <h6 className="text-uppercase fs-5 ls-2">{lang?.overviewTab.role}</h6>
                        <p className="mb-0">{lang?.profileHeader.admin} {user?.city?.name}</p>
                    </Col>
                    <Row>
                        <Col xs={6} className="mb-5">
                            <h6 className="text-uppercase fs-5 ls-2">{lang?.overviewTab.fullName}</h6>
                            <p className="mb-0">{user?.user?.username}</p>
                        </Col>
                        <Col xs={6}>
                            <h6 className="text-uppercase fs-5 ls-2">{lang?.overviewTab.email}</h6>
                            <p className="mb-0">{user?.user?.email}</p>
                        </Col>
                        <Col xs={6} className="mb-5">
                            <h6 className="text-uppercase fs-5 ls-2">{lang?.overviewTab.phone}</h6>
                            <p className="mb-0 direction-ltr">{maskPhoneNumber(`${user?.user?.phone}`)}</p>
                        </Col>
                        <Col xs={6} className="mb-5">
                            <h6 className="text-uppercase fs-5 ls-2">{lang?.overviewTab.city}</h6>
                            <p className="mb-0">{user?.city?.name}</p>
                        </Col>
                        <Col xs={12} className="mb-5 d-flex justify-content-end">
                            <EditProfile user={user} lng={lang} session={session} updateSession={updateSession}/>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default AboutMe