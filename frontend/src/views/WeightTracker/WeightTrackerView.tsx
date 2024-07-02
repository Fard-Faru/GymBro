import 'chartjs-adapter-date-fns';
import useWeights from '../../hooks/useWeights';
import {dateValueToString } from '../../utils/dateValueToString';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale, ChartOptions } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale);

export default function WeightTrackerHome() {
  const { data: userWeights, error, isLoading } = useWeights();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  const dates = userWeights?.map(weight => {
    const date = dateValueToString(weight.recordedOn);
    return date.toISOString();
 }) || [];

  const weights = userWeights?.map(weight => weight.weight) || [];

  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Weight Over Time',
        data: weights,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
          tooltipFormat: 'P',
        },
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Weight',
        },
      },
    },
  };

  return (
    <div>
      <p className="text-3xl font-bold underline">Weight Tracking View</p>
      <Line data={data} options={options} />
    </div>
  );
}

