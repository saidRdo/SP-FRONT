import React from 'react'
//import sub components
import Statistics from "@/sub-components/dashboard/Statistics";
import dynamic from "next/dynamic";

const StatisticsTap  = (props) => {

    return (
        <div className={"mb-4"}>
            <Statistics dictionary={props?.dictionary?.tables?.statistics}  />
        </div>
    )
}
export default dynamic(() => Promise.resolve(StatisticsTap), { ssr: false });