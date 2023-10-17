// import node module libraries
import {Col, Row, Card, Button} from 'react-bootstrap';

// import required data files
import StatisticsData from "@/data/dashboard/StatisticsData";


import React, {useState} from 'react';
import DataTable from "react-data-table-component";

const Statistics = (props) => {
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

    const columns = [
        {
            name: `${props?.dictionary?.columns?.zone }`,
            selector: (row) => row.zone,
            sortable: true
        },
        {
            name: `${props?.dictionary?.columns?.parking }`,
            selector: (row) => row.parking,
            sortable: true
        },
        {
            name: `${props?.dictionary?.columns?.numberOfVehicules }`,
            selector: (row) => row.nbrvehicule ,
            sortable: true
        },
        {
            name: `${props?.dictionary?.columns?.date }`,
            selector: (row) => row.date,
            sortable: true
        },
        {
            name: `${props?.dictionary?.columns?.guardian}`,
            selector: (row) => row.guardian,
            sortable: true
        },
        {
            name: `${props?.dictionary?.columns?.percentage }`,
            selector: (row) => row.percentage,
            sortable: true
        },
        {
            name: `${props?.dictionary?.columns?.amount }`,
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
                        <h4 className="mb-0">{`${props?.dictionary?.title}`}</h4>
                    </Card.Header>
                    <Card.Body>
                        <div className={"datatableComponent"}>
                            <div className={"search"}>
                                <label>
                                    {`${props?.dictionary?.search?.label} :`}
                                </label>
                                <input
                                    type="text"
                                    placeholder={`${props?.dictionary?.search?.placeHolder}`}
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