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
import { useSelector } from 'react-redux';
import { screenSizes } from '../constants';

ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);

const ExpensePieChart = () => {
  const expensesData = useSelector((state: any) => state.expense.expensesData);
  const width = useSelector((state: any) => state.app.width);

  if (!expensesData) return <div>Loading Expenses...</div>

  const data = {
    labels: Object.keys(expensesData),
    datasets: [
      {
        data: Object.values(expensesData),
        backgroundColor: ['#374151', '#396AFF', '#232323', '#FC7900'],
        hoverBackgroundColor: ['#374151', '#396AFF', '#232323', '#FC7900'],
        borderWidth: width > screenSizes.tabletMin ? 10: 5,
        hoverBorderWidth: width > screenSizes.tabletMin ? 1 : 0,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
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
          size: width > screenSizes.tabletMin ? 12 : 11,
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
      <div className="mb-4 md:mb-2 text-[18px] font-semibold">
        <h4 className='md:py-4 pt-4 md:pl-2'>Expense Statistics</h4>
      </div>
      <div id={styles.pieSection}>
        <Pie data={data} options={options as object} width={350} />
      </div>
    </div>
  );
};

export default ExpensePieChart;
