import axios from "axios";
import { SignupType } from "../types/SingupType";

export default async function submitLoginData(loginData: SignupType) {

    try {
        const response = await axios.post('http://localhost:5000/api/postLoginData', loginData);
        const uid = response.data.uid;
        console.log('Data submitted successfully:', loginData);
        localStorage.setItem('uid', uid);
        console.log(uid)
      } catch (error) {
        console.error('Error inserting data:', error);

      } 

}