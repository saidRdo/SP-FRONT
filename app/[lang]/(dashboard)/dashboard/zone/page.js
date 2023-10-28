"use client"
// import node module libraries
import {Col, Row, Card, Button, Spinner} from 'react-bootstrap';


import React, {Fragment, useEffect, useState} from 'react';
import DataTable from 'react-data-table-component';
import Assignment from "@/sub-components/assignment/Assignment";
import { Dialog } from 'primereact/dialog';
import {BiEdit, BiLinkExternal} from "react-icons/bi";
import CreateZone from "@/sub-components/dashboard/zone/CreateZone";
import {useSession} from "next-auth/react";
import fetchZones from "@/Controller/Zone/ZoneDataList";
import dynamic from "next/dynamic";


const Zone = () => {
    const [scrollShow, setScrollShow] = useState(false);
    const [AssigmnetModal, setAssigmnetModal] = useState(false);
    const {data:session}=useSession()
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [ZoneData, setZoneData] = useState([]);

    useEffect(() => {
        if (session?.user?.admin?.city?.id) {
            fetchZones(session?.user?.admin?.city?.id,session?.user?.accessToken)
                .then(zones => {
                    //console.log(zones)
                    if (zones) {
                        setLoading(false)
                        return setZoneData(zones.map(zn => {
                            return {
                                id: zn.id,
                                zone: zn.name,
                                lat: zn.lat,
                                lng: zn.lng,
                                agent: zn?.agent ? zn?.agent.user.username : "This zone does not have any agent"
                            }
                        }))
                    }
                })
                .catch(error => console.error("axios catch", error));
        }
    }, [session?.user?.admin?.city?.id]);

    const columns = [
        {
            name: 'Zone',
            selector: (row) => row.zone,
            sortable: true
        },
        {
            name: 'Latitude',
            selector: (row) => row.lat ,
            sortable: true
        }, {
            name: 'Longitude',
            selector: (row) => row.lng ,
            sortable: true
        }, {
            name: 'Agent',
            selector: (row) => row.agent ,
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
    const filteredData = ZoneData.sort((a, b) => b.id - a.id).filter(item =>
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
                                <CreateZone accesstoken={session?.user?.accessToken} city={session?.user?.admin?.city} setzoneData={setZoneData}/>
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
                            {
                                loading ?
                                    <div className="d-flex justify-content-center">
                                        <Spinner animation="border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </Spinner>
                                    </div>
                                    :
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
                            }
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

    );

}

export default dynamic(() => Promise.resolve(Zone), { ssr: false });