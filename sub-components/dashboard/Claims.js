// import node module libraries
import {Col, Row, Card, Button, Badge} from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import {CiImport} from "react-icons/ci";

// import required data files
import React, {useState} from 'react';
import ClaimsData from "@/data/dashboard/ClaimsData";
import {CgImport} from "react-icons/cg";

const Claims = () => {
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
            name: 'Guardian',
            selector: (row) => row.guardian,
            sortable: true
        },
        {
            name: 'Client',
            selector: (row) => row.client,
            sortable: true
        },
        {
            name: 'Date',
            selector: (row) => row.date,
            sortable: true
        },
        {
            name:"Claim",
            selector:row => row.Claim
        },
        {
            name:"Attachment",
            cell:(row)=>{
                return <img src={`${row.Attachment[0]}`} alt="attachment" width="80" height="50"/>;
            }
        },
        {
            name:"Status",
            cell:(row)=>{
                if (row.status==="En cours") {
                    return <Badge pill bg="warning" className="me-1">{row.status}</Badge>;
                }else{
                    return <Badge pill bg="success" className="me-1">{row.status}</Badge>;
                }
            }
        },
        {
            name:"Action",
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
                        <h4 className="mb-0">Claims</h4>
                    </Card.Header>
                    <Card.Body>
                        <div className={"datatableComponent"}>
                            <div className={"search"}>
                                <label>
                                    Search :
                                </label>
                                <input
                                    type="text"
                                    placeholder="Search by zone or parking or date"
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