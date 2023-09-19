// import node module libraries
import Link from 'next/link';
import {ProgressBar, Col, Row, Card, Table, Image, Badge} from 'react-bootstrap';

// import required data files
import StatisticsData from "@/data/dashboard/StatisticsData";
import ClaimsData from "@/data/dashboard/ClaimsData";

const Claims = () => {
    return (
        <Row className="mt-6">
            <Col md={12} xs={12}>
                <Card>
                    <Card.Header className="bg-white  py-4">
                        <h4 className="mb-0">Claims</h4>
                    </Card.Header>
                    <Table responsive className="text-nowrap mb-0">
                        <thead className="table-light">
                            <tr>
                                <th>Zone</th>
                                <th>Parking</th>
                                <th>Client</th>
                                <th>Date</th>
                                <th>Claim</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ClaimsData.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="align-middle text-dark text-center">
                                            {item.zone}
                                        </td>
                                        <td className="align-middle text-dark text-center">
                                            {item.parking}
                                        </td>
                                        <td className="align-middle text-dark text-center">
                                            {item.client}
                                        </td>
                                        <td className="align-middle text-dark text-center">
                                            {item.date}
                                        </td>
                                        <td className="align-middle text-dark text-center">
                                            {item.Claim}
                                        </td>
                                        <td className="align-middle text-dark text-center">
                                            <Badge pill bg="warning"  className="me-1">{item.status}</Badge>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                    <Card.Footer className="bg-white text-center">
                        <Link href="#" className="link-primary">View All claims</Link>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    )
}

export default Claims