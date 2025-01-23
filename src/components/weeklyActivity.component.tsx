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
import { useSelector } from "react-redux";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const WeeklyActivityComponent = () => {
  const weeklyActivity = useSelector((state: any) => state.activity.weeklyActivity);

  if (!weeklyActivity) return <div>Loading Weekly Activity...</div>

  const data = {
    labels: Object.keys(weeklyActivity?.withdraw) || [],
    datasets: [
      {
        label: "Withdraw",
        data: Object.values(weeklyActivity?.withdraw) || [],
        backgroundColor: "black",
        borderWidth: 0,
        borderRadius: 20,
        barThickness: 15,
        barPercentage: 5,
        borderSkipped: false,
      },
      {
        label: "Deposit",
        data: Object.values(weeklyActivity?.deposit) || [],
        backgroundColor: "#396AFF",
        borderWidth: 0,
        borderRadius: 20,
        barThickness: 15,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
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
    <div className="text-gray-700">
      <div className="text-[18px] font-semibold mb-2">
        <h4 className="mt-8 md:mt-4 md:mb-6 text-[18px] font-semibold ">Weekly Activity</h4>
      </div>
      <div id={styles.weeklyActivitySection}>
        <Bar data={data} options={options as object} />
      </div>
    </div>
  );
};

export default WeeklyActivityComponent;
