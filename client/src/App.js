import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";

import AddBoat from "./pages/AddBoat";
import AllBoats from "./pages/AllBoats";
import Home from "./pages/Home";
import Page from "./components/Page";

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },

  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;

class Login extends Component {
  render() {
    return <div>LOGIN</div>;
  }
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Page>
          <Switch>
            <Route exact path="/add-boat" component={AddBoat} />
            <Route exact path="/boats" component={AllBoats} />
            <Route path="/" component={Home} />
          </Switch>
        </Page>
      </BrowserRouter>
    );
  }
}

export default App;
