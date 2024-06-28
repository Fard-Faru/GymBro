import { Button, Input, Spacer, Card, CardBody } from "@nextui-org/react";
export default function Login() {
  return (
    <div className="flex items-center justify-center flex-1">
      <Card
        isBlurred
        fullWidth
        className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
        style={{ maxWidth: "510px" }}
        shadow="sm"
      >
        <CardBody>
          <div style={{ textAlign: "center" }}>LOGIN</div>

          <Spacer y={5} />
          <Input isRequired isClearable type="email" label="Email" />

          <Spacer y={5} />
          <Input
            isRequired
            isClearable
            label="Password"
            placeholder="Enter your password"
            type={"password"}
          />

          <Spacer y={8} />
          <Button size="md" style={{ width: "50%", alignSelf: "center" }}>
            Login
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
