import axios from "axios";
import { SignupType } from "../types/SingupType";

export default async function submitSignupData(singupData: SignupType) {

    try {
        await axios.post('http://localhost:5000/api/insertSignupData', singupData);
        console.log('Data inserted successfully:', singupData);
      } catch (error) {
        console.error('Error inserting data:', error);
      } 

}