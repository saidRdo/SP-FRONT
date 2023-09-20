import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import NumberOfReservedParkingSpacesByHours from "@/data/dashboard/Charts/PieChartData";

const PieChart = () => {
    const data = {
        labels: NumberOfReservedParkingSpacesByHours.map(item=>item.label),
        datasets: [
            {
                type: 'doughnut',
                label: "Number Of Reserved Parking Spaces By Hours ",
                backgroundColor: ["rgb(60,182,10)",
                    "rgb(40,76,167)",
                    "rgb(135,25,25)",
                    "rgb(253,97,0)",
                    "rgb(241,3,110)"],
                borderColor: "rgba(180,180,185,0.36)",
                data: NumberOfReservedParkingSpacesByHours.map(item=>item.NbrReservedParkingspaces),
            },
        ],
    };
    return (
        <div className={"chartCard"}>
            <Pie data={data} />
        </div>
    );
};
export default PieChart;
