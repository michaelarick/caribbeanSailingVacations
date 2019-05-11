import React, { Component } from "react";
import API from "../utils/API";
import Fade from "react-reveal/Fade";

class BoatDetail extends Component {
  state = {};

  componentDidMount() {
    let { id } = this.props.match.params;
    API.getBoat(id).then(res => {
      this.setState({
        boat: res.data
      });
    });
  }

  showBoat = () => {
    return this.state.boat ? (
      <div>
        <Fade bottom cascade>
          <div>{this.state.boat._id}</div>
          <div>{this.state.boat.boatName}</div>
          <div>{this.state.boat.crewBio}</div>
        </Fade>
      </div>
    ) : (
      <div>loading..</div>
    );
  };

  render() {
    return <div>{this.showBoat()}</div>;
  }
}

export default BoatDetail;
