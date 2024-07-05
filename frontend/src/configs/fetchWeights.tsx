import axios from 'axios';
import { WeightType } from "../types/WeightType";

export const fetchWeights = async (): Promise<Array<WeightType>> => {
  const { data } = await axios.get('http://localhost:5000/api/getWeight');
  return data;
};
