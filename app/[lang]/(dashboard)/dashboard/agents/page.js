"use client"
// import node module libraries
import {Col, Row, Card, Button, Modal} from 'react-bootstrap';

// import required data files
import AgentsData from "@/data/dashboard/AgentsData";


import React, {Fragment, useEffect, useRef, useState} from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/jquery.dataTables.css';
import 'datatables.net';
import CreateAgent from "@/sub-components/dashboard/CreateAgent";

const Agents = () => {
    const tableRef = useRef();
    const [scrollShow, setScrollShow] = useState(false);

    useEffect(() => {
        // Initialize DataTable
        if ($.fn.DataTable.isDataTable(tableRef.current)) {
            return;
        }
        $(tableRef.current).DataTable({
            data:AgentsData,
            language:{
                search:"Search : ",
                searchPlaceholder:"Search by any info"
            },
            columns: [
                { title: 'ID', data: 'id' },
                { title: 'Picture', data: 'picture',
                    render:(data)=>{
                        return `<img src=${data} class="rounded-circle avatar avatar-lg" alt="avatar"/>`;
                    }
                },
                { title: 'Name', data: 'username' },
                { title: 'Email', data: 'email' },
                { title: 'City', data: 'city' },
                { title: 'Zone', data: 'zone' },
                { title: 'Create at', data: 'created_at'},
                {
                    title: 'Action',
                    data: 'id',
                    render:(data)=>{
                        return '<button type="button" class="me-1 btn btn-sm bg-warning text-white"> Show </button>';
                    }
                }

            ],
            paging: true,
            searching: true,
            scrollY:true,
            autoWidth:false
        });
    }, [AgentsData]);

    return (
        <Row className="mt-5 ml-5 mr-5 justify-content-center">
            <Col xl={12} lg={12} md={12} xs={12}>
                <Card className={"ml-5 mr-5"}>
                    <Card.Header className="bg-white py-4 d-flex justify-content-between align-items-center">
                        <h4 className="mb-0">List of agents</h4>
                        <Fragment>
                            <Button className={"text-white"} variant="primary" onClick={() => setScrollShow(!scrollShow)}>
                                Create new agent
                            </Button>
                            <Modal show={scrollShow} onHide={() => setScrollShow(!scrollShow)}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Create new agent</Modal.Title>
                                </Modal.Header>
                                <Modal.Body >
                                    <CreateAgent/>
                                </Modal.Body>
                            </Modal>
                        </Fragment>
                    </Card.Header>
                    <Card.Body>
                        <table ref={tableRef}/>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Agents;