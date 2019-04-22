import React from "react";

const SignInForm = props => (
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
        placeholder="Email"
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
        placeholder="Password"
        name="password"
        onChange={props.handleInputChange}
        required
      />
    </div>
    <div className="pull-right">
      <button
        onClick={props.handleSignIn}
        type="submit"
        className="btn btn-lg btn-danger"
      >
        Submit
      </button>
    </div>
  </form>
);

export default SignInForm;
