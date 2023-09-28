"use client"
// import node module libraries
import {Col, Row, Card, Button, Modal} from 'react-bootstrap';

// import required data files
import React, {Fragment, useEffect, useRef, useState} from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/jquery.dataTables.css';
import 'datatables.net';
import ZoneData from "@/data/dashboard/ZoneData";
import CreateZone from "@/sub-components/dashboard/zone/CreateZone";

const Zone = () => {
    const tableRef = useRef();
    const [scrollShow, setScrollShow] = useState(false);

    useEffect(() => {
        // Initialize DataTable
        if ($.fn.DataTable.isDataTable(tableRef.current)) {
            return;
        }
        $(tableRef.current).DataTable({
            data:ZoneData,
            language:{
                search:"Search : ",
                searchPlaceholder:"Search by any info"
            },
            columns: [
                { title: 'ID', data: 'id' },
                { title: 'Zone', data: 'name' },
                { title: 'City', data: 'city' },
                { title: 'Agent', data: 'agent' },
                { title: 'Create at', data: 'created_at'},
                {
                    title: 'Action',
                    data: 'id',
                    render:(data)=>{
                        return '<div><button type="button" class="me-1 btn btn-sm bg-success text-white"> Btn 1 </button><button type="button" class="me-1 btn btn-sm bg-warning text-white">  Btn 2 </button></div>';
                    }
                }

            ],
            paging: true,
            searching: true,
            scrollY:true,
            autoWidth:false
        });
    }, [ZoneData]);

    return (
        <Row className="mt-5 ml-5 mr-5 justify-content-center">
            <Col xl={12} lg={12} md={12} xs={12}>
                <Card className={"ml-5 mr-5"}>
                    <Card.Header className="bg-white py-4 d-flex justify-content-between align-items-center">
                        <h4 className="mb-0">List of zones</h4>
                        <Fragment>
                            <Button className={"text-white"} variant="primary" onClick={() => setScrollShow(!scrollShow)}>
                                Create new zone
                            </Button>
                            <Modal show={scrollShow} onHide={() => setScrollShow(!scrollShow)}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Create new zone</Modal.Title>
                                </Modal.Header>
                                <Modal.Body >
                                    <CreateZone/>
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

export default Zone;