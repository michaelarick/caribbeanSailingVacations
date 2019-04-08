import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddBoat from "./pages/AddBoat";
import AllBoats from "./pages/AllBoats";
import Home from "./pages/Home";
import Page from "./components/Page";

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
