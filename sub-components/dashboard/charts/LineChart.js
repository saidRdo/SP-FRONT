
import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import NumberOfHoursBooked from "@/data/dashboard/Charts/LineChart";

const LineChart = () => {


    const data = {
        labels: NumberOfHoursBooked.map(item=>item.hour),
        datasets: [
            {
                label: "Number Of Hours Booked",
                backgroundColor: "rgb(3,129,241)",
                borderColor: "rgb(3,129,241)",
                data: NumberOfHoursBooked.map(item=>item.HoursBooked),
            },
        ],
    };

    return (
        <div>
            <Line data={data} />
        </div>
    );
};

export default LineChart;