import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWeightScale, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { Input, DatePicker, RadioGroup, Radio, DateValue, CardBody, Card, Button } from "@nextui-org/react";
import { ChangeEvent, useState } from "react";
import { WeightType } from "../../types/WeightType"
import submitWeightData from '../../api/submitWeightData';

export default function WeightTrackerHome() {

    const [weightData, setWeightData] = useState<WeightType>({
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
    
        setWeightData((prevData) => ({
            ...prevData,
            recordedOn: date // Use formatted date string
        }));
    }
    
    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        submitWeightData(weightData);
    }

    return (
      <div className="flex items-center justify-center flex-1" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
        <p className="text-3xl font-bold underline">Add New Weight</p>
        <Card
        isBlurred
        fullWidth
        className="border-none bg-background/60 dark:bg-default-100/50 py-10 px-8"
        style={{ maxWidth: "700px", height: "100%"}}
        shadow="sm"
        >
            <CardBody>
                <form
                onSubmit={handleSubmit}
                style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
                }}
                >
                    <RadioGroup 
                        isRequired 
                        label="Select your metric" 
                        aria-label="Select your metric"
                        name="metric"
                        value={weightData.metric}
                        onChange={handleChange}
                        >
                            <div
                            style={{
                                display: "flex",
                                flexDirection:"row",
                                alignItems: "center",
                                gap: "15px"
                            }}>
                                <Radio value="lbs" aria-label="lbs">lbs</Radio>
                                <Radio value="kg" aria-label="kg">kg</Radio>
                            </div>
                            
                    </RadioGroup>
                    <br/>

                    <Input 
                    type="number" 
                    label="Weight"
                    name="weight"
                    placeholder='100'
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
                        value={weightData.recordedOn as DateValue}
                        isRequired/>
                        <Button size="lg" color="primary" type="submit" style={{marginTop: "20px"}}>
                            Submit
                        </Button>
                    </form>
                </CardBody>
        </Card>
      </div>
    );
  }
  