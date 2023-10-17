// import node module libraries
import {Col, Row, Card, Button, Badge} from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import {CiImport} from "react-icons/ci";

// import required data files
import React, {useState} from 'react';
import ClaimsData from "@/data/dashboard/ClaimsData";
import {CgImport} from "react-icons/cg";

const Claims = (props) => {
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
            name: `${props?.dictionary?.columns?.guardian }`,
            selector: (row) => row.guardian,
            sortable: true
        },
        {
            name: `${props?.dictionary?.columns?.client }`,
            selector: (row) => row.client,
            sortable: true
        },
        {
            name: `${props?.dictionary?.columns?.date }`,
            selector: (row) => row.date,
            sortable: true
        },
        {
            name:`${props?.dictionary?.columns?.claim }`,
            selector:row => row.Claim
        },
        {
            name:`${props?.dictionary?.columns?.Attachment }`,
            cell:(row)=>{
                return <img src={`${row.Attachment[0]}`} alt="attachment" width="80" height="50"/>;
            }
        },
        {
            name:`${props?.dictionary?.columns?.status }`,
            cell:(row)=>{
                if (row.status==="En cours") {
                    return <Badge pill bg="warning" className="me-1">{row.status}</Badge>;
                }else{
                    return <Badge pill bg="success" className="me-1">{row.status}</Badge>;
                }
            }
        },
        {
            name:`${props?.dictionary?.columns?.action }`,
            selector:row => row,
            cell:(row)=>{
                return <Button className={"text-white"} variant={"success"}><CgImport/></Button>;
            }
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
    const filteredData = ClaimsData.filter(item =>
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
                                    {`${props?.dictionary?.search?.label}`}
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

export default Claims;