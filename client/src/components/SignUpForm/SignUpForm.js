import React from "react";

const SignUpForm = props => (
  <form>
    <div className="form-group">
      <label htmlFor="email">
        <strong>Email</strong>
      </label>
      <input
        className="form-control"
        id="email"
        type="text"
        value={props.email}
        placeholder="Your email address..."
        name="email"
        onChange={props.handleInputChange}
        required
      />
      <label htmlFor="password">
        <strong>Password</strong>
      </label>
      <input
        className="form-control"
        id="password"
        type="password"
        value={props.password}
        placeholder="Choose a password..."
        name="password"
        onChange={props.handleInputChange}
        required
      />
    </div>
    <div className="pull-right">
      <button
        onClick={props.handleSignUp}
        type="submit"
        className="btn btn-lg btn-danger"
      >
        Submit
      </button>
    </div>
  </form>
);

export default SignUpForm;
