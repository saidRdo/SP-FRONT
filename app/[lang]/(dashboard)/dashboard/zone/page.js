"use client"
// import node module libraries
import {Col, Row, Card, Button} from 'react-bootstrap';

// import required data files
import ZoneData from "@/data/Zones/ZoneData";

import React, {Fragment, useState} from 'react';
import DataTable from 'react-data-table-component';
import Assignment from "@/sub-components/assignment/Assignment";
import { Dialog } from 'primereact/dialog';
import {BiEdit, BiLinkExternal} from "react-icons/bi";
import CreateZone from "@/sub-components/dashboard/zone/CreateZone";


const Zone = () => {
    const [scrollShow, setScrollShow] = useState(false);
    const [AssigmnetModal, setAssigmnetModal] = useState(false);

    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);



    const columns = [
        {
            name: 'Zone',
            selector: (row) => row.zone,
            sortable: true
        },
        {
            name: 'City',
            selector: (row) => row.city,
            sortable: true
        },
        {
            name: 'Agent',
            selector: (row) => row.agent ,
            sortable: true
        },
        {
            name: 'Created at',
            selector: (row) => row.created_at,
            sortable: true
        },
        {
            name: 'Action',
            cell: (row) => {
                const handleEditClick = () => {
                    setSelectedUser(row); // Set the selected user for editing
                    setAssigmnetModal(true); // Open the modal
                };

                return (
                    <div className="card flex justify-content-center">
                        <Button variant={"warning"} className={"d-flex align-items-center text-white"} onClick={handleEditClick}>
                            <BiEdit/>
                        </Button>
                    </div>
                );
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
            },
        },
        cells: {
            style: {
                borderLeft: '1px solid #ccc',
            },
        },
    };
    const filteredData = ZoneData.filter(item =>
        item.zone.toLowerCase().includes(filterText.toLowerCase()) || item.agent.toLowerCase().includes(filterText.toLowerCase())
    );

    const handleSearch = (e) => {
        const value = e.target.value || '';
        setFilterText(value);
        setResetPaginationToggle(!resetPaginationToggle);
    };

    return (
        <Row className="mt-5 ml-5 mr-5 justify-content-center">
            <Col xl={12} lg={12} md={12} xs={12}>
                <Card className={"ml-5 mr-5"}>
                    <Card.Header className="bg-white py-4 d-flex justify-content-between align-items-center flex-wrap">
                        <h4 className="xs-mb-4">List of zone</h4>
                        <div className="card flex justify-content-center">
                            <Button className={"d-flex align-items-center text-white"} onClick={() => setScrollShow(true)} >
                                <BiLinkExternal className={"ml-2 mr-2"}/> Create new zone
                            </Button>
                            <Dialog header="Create new zone"  style={{width:"100vh"}} visible={scrollShow} maximizable onHide={() => setScrollShow(false)}>
                                <CreateZone/>
                            </Dialog>
                        </div>
                    </Card.Header>
                    <Fragment>
                        <Dialog
                            header="Assignment to a zone"
                            visible={AssigmnetModal}
                            maximizable
                            style={{width:"100vh"}}
                            onHide={() => setAssigmnetModal(false)}
                        >
                            {selectedUser && <Assignment agent={selectedUser.agent} zones={selectedUser.zone} from={"zone"}/>}
                        </Dialog>
                    </Fragment>
                    <Card.Body>
                        <div className={"datatableComponent"}>
                            <div className={"search"}>
                                <label>
                                    Search :
                                </label>
                                <input
                                    type="text"
                                    placeholder="Search by Zone Or Agents"
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

    );

}

export default Zone;