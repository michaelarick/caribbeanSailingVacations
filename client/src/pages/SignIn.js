import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import SignInForm from "../components/SignInForm";
import API from "../utils/API";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSignIn = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    const validatedUser = await API.userSignIn({ email, password });
    return <Redirect to="/boats" state={validatedUser} />;
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <>
        <SignInForm
          handleInputChange={this.handleInputChange}
          handleSignIn={this.handleSignIn}
          email={this.state.email}
          password={this.state.password}
        />
      </>
    );
  }
}

export default SignIn;
