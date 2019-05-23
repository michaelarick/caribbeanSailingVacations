import React, { Component } from "react";
import API from "../utils/API";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Slide from "react-reveal/Slide";
import Carousel from "../components/Carousel";
import Zoom from "react-reveal/Zoom";

const BoatContainer = styled.div`
  display: grid;
  overflow: hidden;
  border: 1px solid ${props => props.theme.transparentGrey};
  grid-template-columns: 25% 25% 25% 25%;
  grid-gap: 2rem;
  position: relative;
  width: 100%;
  transition: all 1s ease-out;
  height: 40rem;
  background-color: rgba(200, 200, 200, 0.6);
`;
const BoatInfo = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const BoatsDisplay = styled.div`
  display: grid;
  grid-template: 50% 50% / 50% 50%;
  grid-gap: 3rem;
  background: ${props => props.theme.transparentGrey};
  @media (max-width: 800px) {
    grid-template: 50% 50% / 100%;
  }
`;

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

  renderImages = images => {
    return images.map((image, i) => {
      return (
        <Slide key={i} right>
          <img src={image} alt="" />
        </Slide>
      );
    });
  };

  showBoats = () => {
    return this.state.boats.map((boat, i) => {
      return (
        <Zoom bottom>
          <BoatContainer key={boat._id}>
            <BoatInfo key={`${boat._id}${i + 1}`}>{boat.boatName}</BoatInfo>
            <BoatInfo key={`${boat._id}${i + 2}`}>{boat.manufacture}</BoatInfo>
            <BoatInfo key={`${boat._id}${i + 3}`}>{boat.year}</BoatInfo>
            <Link
              params={{ id: boat._id }}
              key={`${boat._id}${i + 5}`}
              to={`/boat/${boat._id}`}
            >
              {"Learn More!"}
            </Link>
            <Carousel key={`${boat._id}${i + 6}`}>
              {this.renderImages(boat.imgs)}
            </Carousel>
          </BoatContainer>
        </Zoom>
      );
    });
  };

  render() {
    return <BoatsDisplay>{this.showBoats()}</BoatsDisplay>;
  }
}

export default AllBoats;
