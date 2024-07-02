import { dateValueToDate } from "../utils/dateValueToDate";
import { WeightType } from "../types/WeightType"
import axios from "axios";

export default async function submitWeightData(weightData: WeightType) {
    
    const formattedWeightData = {
        ...weightData,
        recordedOn: dateValueToDate(weightData.recordedOn)
    };
    console.log(formattedWeightData);

    try {
        await axios.post('http://localhost:5000/api/insertWeight', formattedWeightData);
        console.log('Data inserted successfully:', formattedWeightData);
      } catch (error) {
        console.error('Error inserting data:', error);
      } 

}