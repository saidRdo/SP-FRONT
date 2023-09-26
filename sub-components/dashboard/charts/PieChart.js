import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from "react-chartjs-2";
import NumberOfReservedParkingSpacesByHours from "@/data/dashboard/Charts/PieChartData";

ChartJS.register(ArcElement, Tooltip, Legend);


const PieChart = () => {
    const data = {
        labels: NumberOfReservedParkingSpacesByHours.map(item=>item.label),
        datasets: [
            {
                label: "Number Of Reserved Parking Spaces By Hours ",

                backgroundColor: [
                    'rgba(54, 162, 235, 1.12)',
                    'rgba(255, 206, 86, 1.12)',
                    'rgba(75, 192, 192, 1.12)',
                    'rgba(153, 102, 255, 1.12)',
                    'rgba(255,67,67,1.12)',
                ],
                borderColor: [
                    'rgb(0,151,255)',
                    'rgb(255,181,0)',
                    'rgb(0,178,178)',
                    'rgb(85,0,255)',
                    'rgb(255,0,0)',
                ],
                data: NumberOfReservedParkingSpacesByHours.map(item=>item.NbrReservedParkingspaces),
            },
        ],
    };
    return (
        <div className={"chartCardPie"}>
            <Pie data={data} width={190} height={190}/>
        </div>
    );
};
export default PieChart;
