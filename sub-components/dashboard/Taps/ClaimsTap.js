import React from 'react'
import {Col, Row, Card} from 'react-bootstrap';
//import sub components
import Statistics from "@/sub-components/dashboard/Statistics";
import Claims from "@/sub-components/dashboard/Claims";
import LineChart from "@/sub-components/dashboard/charts/LineChart";
import BarChart from "@/sub-components/dashboard/charts/BarChart";
import PieChart from "@/sub-components/dashboard/charts/PieChart";
import dynamic from "next/dynamic";

const ClaimsTap  = (props) => {

    return (
            <div className={"mb-4"}>
                <Claims dictionary={props?.dictionary?.tables?.claims} />
            </div>
    )
}

export default dynamic(() => Promise.resolve(ClaimsTap), { ssr: false });