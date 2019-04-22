import React, { Component } from "react";
import SignUpForm from "../components/SignUpForm";
import API from "../utils/API";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    isAdmin: false
  };

  handleSignUp = event => {
    event.preventDefault();
    console.log("event (╯°□°)╯︵ ┻━┻ ", event.data);
    try {
      this.saveUser();
    } catch (error) {
      console.log("error (╯°□°)╯︵ ┻━┻ ", error.message);
    }
  };

  saveUser = () => {
    API.userCreate({
      email: this.state.email,
      password: this.state.password,
      isAdmin: false
    });
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
        <SignUpForm
          handleInputChange={this.handleInputChange}
          handleSignUp={this.handleSignUp}
          userName={this.state.email}
          password={this.state.password}
        />
      </>
    );
  }
}

export default SignIn;
