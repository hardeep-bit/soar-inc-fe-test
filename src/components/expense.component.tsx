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

const ExpensePieChart = (props: any) => {
  const { expensesData } = props;;
  const data = {
    labels: Object.keys(expensesData),
    datasets: [
      {
        data: Object.values(expensesData),
        backgroundColor: ['#374151', '#396AFF', '#232323', '#FC7900'],
        hoverBackgroundColor: ['#374151', '#396AFF', '#232323', '#FC7900'],
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
