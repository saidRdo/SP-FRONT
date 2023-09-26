// import node module libraries
import Link from 'next/link';
import {ProgressBar, Col, Row, Card, Table, Image, Button} from 'react-bootstrap';
import DataTable from 'datatables.net-dt';
import Badge from 'react-bootstrap/Badge';

// import required data files
import StatisticsData from "@/data/dashboard/StatisticsData";


import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import ClaimsData from "@/data/dashboard/ClaimsData";

const Claims = () => {
    const tableRef = useRef();

    useEffect(() => {
        // Initialize DataTable
        if ($.fn.DataTable.isDataTable(tableRef.current)) {
            return;
        }
        $(tableRef.current).DataTable({
            data:ClaimsData,
            language:{
                search:"Search : ",
                searchPlaceholder:"Search by any info"
            },
            columns: [
                { title: 'ID', data: 'id' },
                { title: 'Zone', data: 'zone' },
                { title: 'Parking', data: 'parking' },
                { title: 'Guardian', data: 'guardian' },
                { title: 'Client', data: 'client' },
                { title: 'Date', data: 'date' },
                { title: 'Claim', data: 'Claim' },
                {
                    data: 'Attachment',
                    render: (data) => {
                        console.log(data)
                        if (data.length <= 1) {
                            return `<img src="${data}" alt="attachment" width="80" height="50"></img>`;
                        } else {
                            const images =[];
                            for (let i = 0; i < data.length; i++) {
                                if (i===2){
                                    break
                                }
                                images.push(`<img src="${data[i]}" alt="attachment" width="80" height="50"></img>`);
                            }
                            return `<div class="image-gallery">${images.join('')}</div>`;
                        }
                    },
                    title: 'Pièce jointe'
                },
                {
                    title: 'Status',
                    data: 'status',
                    render:(data)=>{
                        if (data==="En cours de traitement") {
                            return `<span class="me-1 badge rounded-pill bg-warning">${data}</span>`;
                        }else{
                            return `<span class="me-1 badge rounded-pill badge-success">${data}</span>`;
                        }
                    }
                },
                {
                    title: 'Action',
                    data: 'id',
                    render:(data)=>{
                        return '<button type="button" class="me-1 btn btn-sm badge-success text-white"><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 1h8v2h-8v-2z"></path><path d="M15 4h-14c-0.55 0-1 0.45-1 1v5c0 0.55 0.45 1 1 1h3v4h8v-4h3c0.55 0 1-0.45 1-1v-5c0-0.55-0.45-1-1-1zM2 7c-0.552 0-1-0.448-1-1s0.448-1 1-1 1 0.448 1 1-0.448 1-1 1zM11 14h-6v-5h6v5z"></path></svg></button>';
                    }
                }
            ],
            paging: true,
            searching: true,
            scrollY:true,
            scrollCollapse:true
        });
    }, [ClaimsData]);

    return (
        <Row className="mt-6">
            <Col md={12} xs={12}>
                <Card>
                    <Card.Header className="bg-white  py-4">
                        <h4 className="mb-0">Claims</h4>
                    </Card.Header>
                    <Card.Body>
                        <table ref={tableRef}/>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Claims;