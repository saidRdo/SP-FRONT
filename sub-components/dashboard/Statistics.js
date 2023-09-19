// import node module libraries
import Link from 'next/link';
import { ProgressBar, Col, Row, Card, Table, Image } from 'react-bootstrap';

// import required data files
import StatisticsData from "@/data/dashboard/StatisticsData";

const Statistics = () => {
    return (
        <Row className="mt-6">
            <Col md={12} xs={12}>
                <Card>
                    <Card.Header className="bg-white  py-4">
                        <h4 className="mb-0">Statistics 24 hours ago</h4>
                    </Card.Header>
                    <Table responsive className="text-nowrap mb-0">
                        <thead className="table-light">
                            <tr>
                                <th>Zone</th>
                                <th>Parking</th>
                                <th>Nombre des véhicule</th>
                                <th>Date</th>
                                <th>Guardian</th>
                                <th>Percentage</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {StatisticsData.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="align-middle text-dark text-center">
                                            {item.zone}
                                        </td>
                                        <td className="align-middle text-dark text-center">
                                            {item.parking}
                                        </td>
                                        <td className="align-middle text-dark text-center">
                                            {item.nbrvehicule}
                                        </td>
                                        <td className="align-middle text-dark text-center">
                                            {item.date}
                                        </td>
                                        <td className="align-middle text-dark text-center">
                                            {item.guardian}
                                        </td>
                                        <td className="align-middle text-dark text-center">
                                            {item.percentage}
                                        </td>
                                        <td className="align-middle text-dark text-center">
                                            {item.amount}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                    <Card.Footer className="bg-white text-center">
                        <Link href="#" className="link-primary">View All staistics</Link>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    )
}

export default Statistics