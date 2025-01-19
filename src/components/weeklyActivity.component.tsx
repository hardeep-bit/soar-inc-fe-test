import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// @ts-ignore
import styles from "../styles/components/WeeklyActivity.module.css";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Withdraw",
        data: [300, 400, 200, 500, 300, 450, 400],
        backgroundColor: "black",
        borderWidth: 0,
        borderRadius: 20,
        barThickness: 15,
        barPercentage: 5,
        borderSkipped: false,
      },
      {
        label: "Deposit",
        data: [200, 300, 150, 400, 200, 350, 300],
        backgroundColor: "#398eff",
        borderWidth: 0,
        borderRadius: 20,
        barThickness: 15,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          color: "#9ca3af",
          padding: 20,
          boxWidth: 20,
          boxHeight: 20,
          boxRadius: 10,
          usePointStyle: true,
        },
      },
      tooltip: {
        enabled: true,
      },
      datalabels: {
        display: false,
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#555",
        },
      },
      y: {
        grid: {
          color: "#e0e0e0",
        },
        ticks: {
          color: "#555",
        },
        border: {
          display: false,
        },
      },
    },
  };

  return (
    <div className=" text-gray-700 ">
      <div className="text-[18px] font-semibold mb-4">
        <h4>Weekly Activity</h4>
      </div>
      <div id={styles.weeklyActivitySection}>
        <Bar data={data} options={options as object} />
      </div>
    </div>
  );
};

export default BarChart;
