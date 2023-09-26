import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import NumberOfHoursBooked from "@/data/dashboard/Charts/LineChartData";

const LineChart = () => {


    const data = {
        labels: NumberOfHoursBooked.map(item=>item.hour),
        datasets: [
            {
                label: "Number Of Hours Booked",
                backgroundColor: "rgba(255,0,0,0.6)",
                borderColor: "rgb(255,0,0)",
                borderWidth:2,
                data: NumberOfHoursBooked.map(item=>item.HoursBooked),
            },
        ],
    };

    return (
        <div className={"chartCard"}>
            <Line data={data} />
        </div>
    );
};

export default LineChart;