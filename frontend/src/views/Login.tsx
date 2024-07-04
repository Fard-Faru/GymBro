import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Input,
  Spacer,
  Divider,
  Card,
  CardBody,
} from "@nextui-org/react";

export default function Login() {
  const navigate = useNavigate();

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");
    console.log("Username:", username);
    console.log("Password:", password);
    navigate("/dashboard");
  };

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
            onSubmit={onFormSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="text-xl font-bold ali">Login</div>
            <div
              style={{
                textAlign: "center",
              }}
              className="py-4"
            >
              Hey, Enter your details to sign in to your account
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
            />
            <Spacer y={2} />
            <div className="text-sm">Having trouble signing in?</div>

            <Spacer y={6} />
            <Button size="md" style={{ width: "60%" }} type="submit">
              Log in
            </Button>
            <Divider className="my-4" />
            <div className="text-sm">
              Don't have an account? <b>Sign Up Now</b>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
