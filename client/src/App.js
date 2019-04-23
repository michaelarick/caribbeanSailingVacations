import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AddBoat from "./pages/AddBoat";
import AllBoats from "./pages/AllBoats";
import Home from "./pages/Home";
import Page from "./components/Page";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SignOut from "./pages/SignOut";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Page>
          <Switch>
            <Route exact path="/add-boat" component={AddBoat} />
            <Route exact path="/boats" component={AllBoats} />
            <Route exact path="/sign-in" component={SignIn} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/sign-out" component={SignOut} />
            <Route path="/" component={Home} />
          </Switch>
        </Page>
      </BrowserRouter>
    );
  }
}

export default App;
