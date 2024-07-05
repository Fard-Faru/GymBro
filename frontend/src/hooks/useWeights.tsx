import { useQuery } from 'react-query';
import { WeightType } from "../types/WeightType";
import { fetchWeights } from '../configs/fetchWeights';

export default function useWeights() {
  return useQuery<WeightType[]>('weights', fetchWeights);
}
