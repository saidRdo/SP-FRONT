// import node module libraries
import { Col, Row, Card } from 'react-bootstrap';

// import required data files
import StatisticsData from "@/data/dashboard/StatisticsData";


import React, { useEffect, useRef } from 'react';
import $ from 'jquery';

const Statistics = () => {
    const tableRef = useRef();

    useEffect(() => {
        if ($.fn.DataTable.isDataTable(tableRef.current)) {
            return;
        }
        // Initialize DataTable
        $(tableRef.current).DataTable({
            data:StatisticsData,
            language:{
                search:"Search : ",
                searchPlaceholder:"Search by any info"
            },
            columns: [
                { title: 'ID', data: 'id' },
                { title: 'Zone', data: 'zone' },
                { title: 'Parking', data: 'parking' },
                { title: 'Number of Vehicles', data: 'nbrvehicule' },
                { title: 'Date', data: 'date' },
                { title: 'Guardian', data: 'guardian' },
                { title: 'Percentage', data: 'percentage' },
                { title: 'Amount', data: 'amount' }
            ],
            paging: true,
            searching: true,
            scrollY:true,
            scrollCollapse:true
        });
    }, []);

    return (
        <Row className="mt-6">
            <Col md={12} xs={12}>
                <Card>
                    <Card.Header className="bg-white  py-4">
                        <h4 className="mb-0">Statistics 24 hours ago</h4>
                    </Card.Header>
                    <Card.Body>
                        <table ref={tableRef}/>
                    </Card.Body>

                </Card>
            </Col>
        </Row>
    )
}

export default Statistics