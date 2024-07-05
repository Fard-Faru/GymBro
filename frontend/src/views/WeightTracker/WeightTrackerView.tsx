import { useState } from "react";
import 'chartjs-adapter-date-fns';
import useWeights from '../../hooks/useWeights';
import {dateValueToString } from '../../utils/dateFormatters/dateValueToString';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale, ChartOptions } from 'chart.js';
import { Button, DateValue } from '@nextui-org/react';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale);

export default function WeightTrackerHome() {
  const [metric, setMetric] = useState<string>("lbs");
  const { data: userWeights, error, isLoading } = useWeights();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;


  // For Chart Consistency
  const sortedWeights = userWeights?.slice().sort((a, b) => {
    const dateA = new Date(a.recordedOn as string).getTime();
    const dateB = new Date(b.recordedOn as string).getTime();
    return dateA - dateB;
  }) || [];

  const formattedDates = sortedWeights.map(weight => dateValueToString(weight.recordedOn as DateValue));
  const weights = sortedWeights.map(weight => {
    if (metric === "kg"){
      return Number(weight.weight) * 0.453592;
    }
    return Number(weight.weight);
});
  

  const data = {
    labels: formattedDates,
    datasets: [
      {
        label: `Weight Over Time (${metric})`,
        data: weights,
        fill: false,
        backgroundColor: 'rgba(66, 135, 245, 0.2)',
        borderColor: 'rgba(66, 135, 245, 1)',
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
          text: `Weight (${metric})`,
        },
      },
    },
  };

  return (
    <div>
      <p className="text-3xl font-bold underline">View Weight Over Time</p>
      <Button 
      color="primary" 
      variant="ghost" 
      onClick={() => metric === "lbs" ? setMetric("kg") :setMetric("lbs")}
      style={{float: "right"}}>
        {metric}
      </Button>
      <Line data={data} options={options} />
    </div>
  );
}

