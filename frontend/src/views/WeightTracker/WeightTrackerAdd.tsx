import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWeightScale, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { Input, DatePicker, RadioGroup, Radio, DateValue } from "@nextui-org/react";
import { ChangeEvent, useState } from "react";

interface WeightData {
    metric: string;
    weight: string;
    recordedOn: DateValue | null;
  }

export default function WeightTrackerHome() {

    const [weightData, setWeightData] = useState<WeightData>({
        metric: "lbs",
        weight: "",
        recordedOn: null
    })

    function handleChange(event : ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target;
        setWeightData(prevData => {
            return {
                ...prevData,
                [name] : value
            }
        })
    }

    function handleDateChange(date: DateValue) {
        setWeightData(prevData => ({
          ...prevData,
          recordedOn: date // TODO: convert format to whatever the db prefers for date value
        }));
      }

    console.log(weightData)


    return (
      <div>
        <p className="text-3xl font-bold underline">Weight Tracking Add</p>

        <RadioGroup 
            isRequired 
            label="Select your metric" 
            aria-label="Select your metric"
            name="metric"
            value={weightData.metric}
            onChange={handleChange}>
                <Radio value="lbs" aria-label="lbs">lbs</Radio>
                <Radio value="kg" aria-label="kg">kg</Radio>
        </RadioGroup>
        <br/>

        <Input 
        type="number" 
        label="Weight"
        name="weight"
        startContent={
            <FontAwesomeIcon icon={faWeightScale} style={{marginRight: "5px"}}/>
        }
        value={weightData.weight}
        onChange={handleChange}
        isRequired
        />

        <br/>
        <DatePicker 
            aria-label="Select a Date"
            label="Select a Date" 
            name="recordedOn"
            startContent={
                <FontAwesomeIcon icon={faCalendarDays} style={{marginRight: "5px"}}/>
            }
            onChange={handleDateChange}
            value={weightData.recordedOn}
            isRequired/>
      </div>
    );
  }
  