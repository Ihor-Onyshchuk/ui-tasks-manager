import React from "react";
import { registrationRequest } from "./services";
import AuthFormContainer from "../../components/auth/AuthFormContainer";

const SignUp = () => (
  <AuthFormContainer
    title="Sign Up"
    submitButtonName="Sign Up"
    handleFormRequest={registrationRequest}
  />
);

export default SignUp;
