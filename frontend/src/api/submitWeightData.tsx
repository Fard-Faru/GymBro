import { dateValueToDate } from "../utils/dateFormatters/dateValueToDate";
import { WeightType } from "../types/WeightType"
import axios from "axios";

export default async function submitWeightData(weightData: WeightType) {

    let weight = Number(weightData.weight);
    if (weightData.metric == "kg") {
      weight *= 0.453592;
    }
    const formattedWeight = String(weight);

    const formattedWeightData = {
        weight: formattedWeight,
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