import React, { Component } from "react";
import { browserHistory, Link } from "react-router-dom";
import Form from "../components/Form";
import API from "../utils/API";

class SignIn extends Component {
  state = {
    userName: "",
    password: ""
  };
  handleSignUp = event => {
    event.preventDefault();
    console.log("event (╯°□°)╯︵ ┻━┻ ", event);
    try {
      API.userSignUp(event);
    } catch (error) {
      console.log("error (╯°□°)╯︵ ┻━┻ ", error.message);
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
          onSubmit={this.handleSignUp}
          userName={this.state.userName}
          password={this.state.password}
        />
      </>
    );
  }
}

export default SignIn;
