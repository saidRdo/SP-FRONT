// import node module libraries
import {Col, Row, Card, Button} from 'react-bootstrap';

// import required data files
import StatisticsData from "@/data/dashboard/StatisticsData";


import React, {useState} from 'react';
import DataTable from "react-data-table-component";

const Statistics = () => {

    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

    const columns = [
        {
            name: 'Zone',
            selector: (row) => row.zone,
            sortable: true
        },
        {
            name: 'Parking',
            selector: (row) => row.parking,
            sortable: true
        },
        {
            name: 'Number of vehicules',
            selector: (row) => row.nbrvehicule ,
            sortable: true
        },
        {
            name: 'Date',
            selector: (row) => row.date,
            sortable: true
        },
        {
            name: 'Guardian',
            selector: (row) => row.guardian,
            sortable: true
        },
        {
            name: 'Percentage',
            selector: (row) => row.percentage,
            sortable: true
        },
        {
            name: 'Amount',
            selector: (row) => row.amount,
            sortable: true
        }
    ];
    const customStyles = {
        headCells: {
            style: {
                fontSize: '14px',
                fontWeight: '600',
                borderTop: '1px solid #ccc',
                borderLeft: '1px solid #ccc',
                borderRight: '1px solid #ccc',

            },
        },
        cells: {
            style: {
                borderLeft: '1px solid #ccc',
                borderRight: '1px solid #ccc',
            },
        },
    };
    const filteredData = StatisticsData.filter(item =>
        item.zone.toLowerCase().includes(filterText.toLowerCase()) || item.parking.includes(filterText.toLowerCase()) || item.date.includes(filterText.toLowerCase())
    );

    const handleSearch = (e) => {
        const value = e.target.value || '';
        setFilterText(value);
        setResetPaginationToggle(!resetPaginationToggle);
    };

    return (
        <Row className="mt-6">
            <Col md={12} xs={12}>
                <Card>
                    <Card.Header className="bg-white  py-4">
                        <h4 className="mb-0">Statistics 24 hours ago</h4>
                    </Card.Header>
                    <Card.Body>
                        <div className={"datatableComponent"}>
                            <div className={"search"}>
                                <label>
                                    Search :
                                </label>
                                <input
                                    type="text"
                                    placeholder="Search by Name Or Zone"
                                    value={filterText}
                                    onChange={handleSearch}
                                />
                            </div>
                            <DataTable
                                columns={columns}
                                data={filteredData}
                                pagination
                                paginationPerPage={5}
                                paginationResetDefaultPage={resetPaginationToggle}
                                paginationRowsPerPageOptions={[5, 10, 15, 20]}
                                highlightOnHover
                                customStyles={customStyles}
                            />
                        </div>
                    </Card.Body>

                </Card>
            </Col>
        </Row>
    )
}

export default Statistics