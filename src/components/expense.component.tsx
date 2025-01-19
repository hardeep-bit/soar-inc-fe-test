import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// @ts-ignore
import styles from "../styles/components/Expense.module.css";

ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);

const ExpensePieChart = () => {
  const data = {
    labels: ['Others', 'Bill Expense', 'Investment', 'Entertainment'],
    datasets: [
      {
        data: [15, 35, 20, 30],
        backgroundColor: ['#374151', '#398eff', 'black', 'orange'],
        hoverBackgroundColor: ['#374151', '#398eff', 'black', 'orange'],
        borderWidth: 10,
        hoverBorderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Remove legend from above the chart
      },
      tooltip: {
        enabled: false, // Disable tooltips
      },
      datalabels: {
        color: '#fff',
        font: {
          weight: 'bold',
          size: 12,
        },
        formatter: (value: any, context: any) => {
          return `${value}%\n${context.chart.data.labels[context.dataIndex]}`;
        },
      },
    },
    animateRotate: true,
    animateScale: true, 
  };

  return (
    <div className="text-gray-700">
      <div className="text-[18px] font-semibold mb-4">
        <h4>Expense Statistics</h4>
      </div>
      <div id={styles.weeklyActivitySection}>
        <Pie data={data} options={options as object} />
      </div>
    </div>
  );
};

export default ExpensePieChart;
