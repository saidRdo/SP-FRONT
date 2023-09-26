
import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import NumberOfReservedPlaces from "@/data/dashboard/Charts/BarChartData";

const BarChart = () => {
    const data = {
        labels: NumberOfReservedPlaces.map(item=>item.label),
        datasets: [
            {
                label: "Number Of Reserved Places",
                backgroundColor: [
                    'rgba(54, 162, 235, 1.12)',
                    'rgba(75, 192, 192, 1.12)',
                    'rgba(255,67,67,1.12)',
                ],
                borderColor: [
                    'rgb(0,151,255)',
                    'rgb(0,178,178)',
                    'rgb(255,0,0)',
                ],
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        }
                    }
                },
                borderWidth:1,
                data:  NumberOfReservedPlaces.map(item=>item.ReservedPlaces),
            },
        ],
    };
    return (
        <div className={"chartCard"}>
            <Bar data={data} />
        </div>
    );
};

export default BarChart;