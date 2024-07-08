import { ChangeEvent, useEffect, useState } from "react";
import { SignupType } from "../types/SingupType";
import submitSignupData from "../api/submitSignupData";
// import { useNavigate } from "react-router-dom";
import {
  Button,
  Input,
  Spacer,
  Card,
  CardBody,
} from "@nextui-org/react";


export default function Signup() {

  const [registerData, setRegisterData] = useState<SignupType>({
    username: "",
    password: ""
  });

  function handleChange(event : ChangeEvent<HTMLInputElement>) {
    const {name, value} = event.target;
    setRegisterData(prevData => {
      return {
        ...prevData,
        [name] : value
      }
    });
  }

  useEffect(() => {
    console.log(registerData);
  }, [registerData]);


  function handleSubmit(event: React.FormEvent){
    event.preventDefault();
    submitSignupData(registerData);
    console.log(registerData);
  }


  return (
    <div className="flex items-center justify-center flex-1">
      <Card
        isBlurred
        fullWidth
        className="border-none bg-background/60 dark:bg-default-100/50 py-10 px-8"
        style={{ maxWidth: "510px" }}
        shadow="sm"
      >
        <CardBody>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="text-xl font-bold ali">Sign Up</div>
            <div
              style={{
                textAlign: "center",
              }}
              className="py-4"
            >
              Please provide a username and password
            </div>

            <Spacer y={5} />
            <Input
              isRequired
              isClearable
              type="text"
              placeholder="Enter your username"
              label="Username"
              name="username"
              size="sm"
              onChange={handleChange}
              value={registerData.username}
            />

            <Spacer y={3} />
            <Input
              isRequired
              isClearable
              label="Password"
              placeholder="Enter your password"
              type="password"
              name="password"
              size="sm"
              onChange={handleChange}
              value={registerData.password}
            />

            <Spacer y={4} />
            <div className="text-sm"><a href="#">Forgot your password?</a></div>

            <Spacer y={5} />
            <Button size="md" style={{ width: "60%" }} type="submit">
              Sign Up
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
