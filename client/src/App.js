import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddBoat from './pages/AddBoat';
import AllBoats from './pages/AllBoats';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/add-boat" component={AddBoat} />
          <Route path="/boats" component={AllBoats} />
          <Route path="/" component={AddBoat} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
