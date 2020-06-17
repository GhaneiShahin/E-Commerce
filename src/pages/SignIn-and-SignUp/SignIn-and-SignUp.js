import React from "react";
import "./SignIn-and-SignUp.scss";
import Signin from "../../components/Authentication/Signin/Signin";
import Signup from "../../components/Authentication/Signup/Signup";

const SignInandSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <Signin />
      <Signup />
    </div>
  );
};

export default SignInandSignUp;
