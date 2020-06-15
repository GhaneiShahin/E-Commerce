import React, { Component } from "react";
import "./Signin.scss";
import FormInput from "../../FormInput/FormInput";
import CostumButton from "../../CostumButton/CostumButton";
import { signInWithGoogle } from "../../../firebase/firebase-utils";

class Signin extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            label="email"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            label="password"
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CostumButton type="submit">Sign in</CostumButton>
            <CostumButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CostumButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
