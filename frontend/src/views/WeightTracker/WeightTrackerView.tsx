import { useQuery } from 'react-query';
import axios from 'axios';
import { WeightType } from "../../types/WeightType"

const fetchWeights = async () => {
  const { data } = await axios.get('http://localhost:5000/api/getWeight');
  return data;
};

export default function WeightTrackerHome() {

  const { data: userWeights, error, isLoading } = useQuery<Array<WeightType>>('weights', fetchWeights);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  console.log(userWeights);

    return (
      <div>
        <p className="text-3xl font-bold underline">Weight Tracking View</p>
      </div>
    );
  }
  