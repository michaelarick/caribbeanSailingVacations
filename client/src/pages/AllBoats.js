import React, { Component } from "react";
import API from "../utils/API";

class AllBoats extends Component {
  state = {
    boats: []
  };

  componentDidMount() {
    this.getBoats();
  }

  componentDidUpdate() {
    this.showBoats();
  }

  getBoats = () => {
    API.getBoats().then(response => {
      if (response) {
        this.setState({ boats: response.data });
      } else {
        console.log("response error (╯°□°)╯︵ ┻━┻ ", response);
      }
    });
  };

  showBoats = () => {
    console.log("boat (╯°□°)╯︵ ┻━┻ ", this.state.boats);
    this.state.boats.map((boat) => {
      console.log("boat in map (╯°□°)╯︵ ┻━┻ ", boat.boatName);
      return <div>{boat.boatName}</div>;
    });
  };

  render() {
    return <div>{this.showBoats()}</div>;
  }
}

export default AllBoats;
