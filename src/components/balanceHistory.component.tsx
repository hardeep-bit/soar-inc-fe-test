import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
// @ts-ignore
import styles from "../styles/components/BalanceHistory.module.css";
import { useSelector } from "react-redux";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const BalanceHistoryComponent = () => {
  const balanceHistory = useSelector((state: any) => state.balance.balanceHistory);
  const colors = {
    purple: {
      default: "#1814F3",
      zero: "#ffffff",
    },
  };

  const createGradient = (ctx: CanvasRenderingContext2D, chartArea: any) => {
    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, colors.purple.default);
    gradient.addColorStop(1, colors.purple.zero);
    return gradient;
  };

  const data = {
    labels: Object.keys(balanceHistory),
    datasets: [
      {
        data: Object.values(balanceHistory),
        tension: 0.5,
        borderColor: "#1814F3",
        pointRadius: 0,
        datalabels: {
          display: false,
        },
        fill: true,
        borderWidth: 2,
        backgroundColor: (context: any) => {
          const { chart } = context;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return "rgba(0,0,0,0)";
          }

          return createGradient(ctx, chartArea);
        },
      }]
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          lineWidth: 1,
          color: "rgba(0, 0, 0, 0.2)",
        },
        border: {
          dash: [2, 4],
        },
        ticks: {
          display: true,
          padding: 10
        }
      },
      y: {
        grid: {
          lineWidth: 1,
          color: "rgba(0, 0, 0, 0.2)",
        },
        border: {
          dash: [2, 4],
        },
        ticks: {
          display: true,
        },
      },
    },
  };

  if (Object.keys(balanceHistory).length === 0) {
    return (
      <div>
        <h1>No Balance History found</h1>
      </div>
    );
  }

  return (
    <div className="text-gray-700">
      <div className="text-[18px] font-semibold mb-2">
        <h4 className="xl:pt-8 xl:pb-4 pb-6 xl:pl-2 mt-[-16px] xl:mt-[4px]">Balance History</h4>
      </div>
      <div id={styles.balanceHistorySection}>
        <Line id="lineGraph" data={data} options={options as object} />
      </div>
    </div>
  );
};

export default React.memo(BalanceHistoryComponent);