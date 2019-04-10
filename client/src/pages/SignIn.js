import React, { Component } from "react";
import { browserHistory, Link } from "react-router-dom";
import Form from "../components/Form";
import API from "../utils/API";

class SignIn extends Component {
  state = {
    userName: "",
    password: ""
  };
  handleSignIn = event => {
    event.preventDefault();
    try {
      API.userSignIn();
    } catch (err) {
      console.log("err (╯°□°)╯︵ ┻━┻ ", err);
    }
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
        <Form
          handleInputChange={this.handleInputChange}
          onSubmit={this.handleSignIn}
          userName={this.state.userName}
          password={this.state.password}
        />
      </>
    );
  }
}

export default SignIn;
