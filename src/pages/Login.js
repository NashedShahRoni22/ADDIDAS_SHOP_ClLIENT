import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { getAuth, RecaptchaVerifier  } from "firebase/auth";

const Login = () => {
  const auth = getAuth();
  window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
  return (
    <div className="my-10 py-10 container mx-auto h-[80vh] flex justify-center items-center">
      <Card className="w-96 h-fit">
        <CardHeader
          variant="gradient"
          color="purple"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="Phone Number" size="lg" color="purple" />
          <Input label="Password" size="lg" color="purple" />
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" color="purple" fullWidth>
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don't have an account?
            <Typography
              as="a"
              href="#signup"
              variant="small"
              color="purple"
              className="ml-1 font-bold"
            >
              Sign up
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
      
    </div>
  );
};

export default Login;
