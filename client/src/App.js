import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import API from "./utils/API";

class App extends Component {
  state = {
    boatName: "",
    description: "",
    img: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log('event.target (╯°□°)╯︵ ┻━┻ ', event.target)
    try {
      this.saveBoats()
    } catch (err) {
      console.log('error in save boats (╯°□°)╯︵ ┻━┻ ', err)
    };
  };

  saveBoats = () => {
    console.log('this.state (╯°□°)╯︵ ┻━┻ ', this.state)
    API.saveBoat({
      boatName: this.state.boatName,
      description: this.state.description,
      img: this.state.img
    })
      .then(res =>
        this.setState({
          boats: res.data,
          message: !res.data.length
            ? "No New boats Found, Try a Different Query"
            : ""
        })
      )
      .catch(err => console.log('saving boat error',err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Form
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            boatName={this.state.boatName}
            description={this.state.description}
            img={this.state.img}
          />
        </header>
      </div>
    );
  }
}

export default App;
