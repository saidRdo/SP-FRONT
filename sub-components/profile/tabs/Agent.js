import React, {useState} from 'react'
//import sub components
import {CarouselCard} from "@/sub-components/Stepper/ImageCarousel/Carousel";
import dynamic from "next/dynamic";
import ReactPaginate from 'react-paginate';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import {Col, Row, Card} from 'react-bootstrap';


const AgentTab  = (props) => {


    return (
        <Row className="mt-6">
            <p> Agent tab </p>
        </Row>
    )
}
export default dynamic(() => Promise.resolve(AgentTab), { ssr: false });