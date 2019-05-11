import React, { Component } from "react";
import SignUpForm from "../components/SignUpForm";
import { Redirect } from "react-router-dom";
import API from "../utils/API";
import _ from "lodash";
import validateEmails from "../utils/validateEmails";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    isAdmin: false
  };

  handleSignUp = async event => {
    event.preventDefault();
    console.log("event (╯°□°)╯︵ ┻━┻ ", event.data);
    try {
      let newUser = await this.saveUser();
      if (newUser) {
        return <Redirect to="/sign-in" />;
      }
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

  validate(value) {
    const errors = {};

    errors.recipients = validateEmails(value.recipients || "");

    _.each(value, ({ name }) => {
      if (!value[name]) {
        errors[name] = "Value is required";
      }
    });

    return errors;
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <>
        <h1>Register With Your Email Address And Get Sailing!</h1>
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

export default SignUp;
