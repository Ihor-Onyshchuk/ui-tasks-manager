import React from "react";
import { loginRequest } from "./services";
import AuthFormContainer from "../AuthFormContainer";

const SignIn = () => (
  <AuthFormContainer
    title="Sign In"
    submitButtonName="Sign In"
    showRememberMe
    handleFormRequest={loginRequest}
  />
);

export default SignIn;
