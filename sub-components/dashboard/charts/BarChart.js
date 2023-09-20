
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
                backgroundColor: ["rgb(3,129,241)", "#01a127","#871919"],
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        }
                    }
                },
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