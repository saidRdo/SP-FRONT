"use client"
// import node module libraries
import {Col, Row, Card, Button} from 'react-bootstrap';

// import required data files
import AgentsData from "@/data/Agent/AgentsData";


import React, {Fragment, useState} from 'react';
import DataTable from 'react-data-table-component';
import CreateAgent from "@/sub-components/dashboard/CreateAgent";
import {Avatar} from "@mui/material";
import Assignment from "@/sub-components/assignment/Assignment";
import { Dialog } from 'primereact/dialog';
import {BiEdit, BiLinkExternal} from "react-icons/bi";

const Agents = () => {
    const [scrollShow, setScrollShow] = useState(false);
    const [AssigmnetModal, setAssigmnetModal] = useState(false);

    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);


    function stringAvatar(name) {
        if(name.includes(' ')){
            return {
                sx: {
                    backgoundColor: "blue",
                },
                children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
            };
        }else{
            return {
                sx: {
                    backgoundColor: "blue",
                },
                children: `${name.split(' ')[0][0]}`,
            };
        }

    }

    const columns = [
        {
            name: 'Image',
            selector: (row) => row.picture,
            sortable: true,
            cell:(row) => {
                if (row.picture) {
                    return (
                        <Avatar
                            alt="Avatar"
                            src={row.picture}
                        />
                    );
                } else {
                    return (
                        <Avatar {...stringAvatar(row.username)} />
                    );
                }
            }
        },
        {
            name: 'Name',
            selector: (row) => row.username,
            sortable: true
        },
        {
            name: 'Zone',
            selector: (row) => row.zone + "\n" ,
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
    const filteredData = AgentsData.filter(item =>
        item.username.toLowerCase().includes(filterText.toLowerCase()) || item.zone.some(zn=>zn.toLowerCase().includes(filterText.toLowerCase()))
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
                    <Card.Header className="bg-white py-4 d-flex justify-content-between align-items-center">
                        <h4 className="mb-0">List of agents</h4>
                            <div className="card flex justify-content-center">
                                <Button className={"d-flex align-items-center text-white"} onClick={() => setScrollShow(true)} >
                                    <BiLinkExternal className={"ml-2 mr-2"}/> Create new agent
                                </Button>
                                <Dialog header="Create new agent" visible={scrollShow} maximizable style={{ width: '50vw' }} onHide={() => setScrollShow(false)}>
                                    <CreateAgent/>
                                </Dialog>
                            </div>
                    </Card.Header>
                    <Fragment>
                        <Dialog
                            header="Assignment to a zone"
                            visible={AssigmnetModal}
                            maximizable
                            style={{ width: '50vw' }}
                            onHide={() => setAssigmnetModal(false)}
                        >
                            {selectedUser && <Assignment agent={selectedUser.username} zones={selectedUser.zone} from={"agent"}/>}
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

    );

}

export default Agents;