import React, { Component } from "react";
import API from "../utils/API";
import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import styled, { css } from "styled-components";

const width = "100rem",
  height = "150rem";
const Container = styled.div`
  border: 1px solid red;
  position: relative;
  overflow: hidden;
  width: ${width};
  height: ${height};
`;
const BoatContainer = styled.div`
  display: grid;
  overflow: hidden;
  border: 1px solid red;
  grid-template-columns: 50rem 50rem;
  grid-gap: 1rem;
  position: relative;
  width: 75rem;
  height: 70rem;
`;
const BoatInfo = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const Children = styled.div`
  width: ${width};
  position: relative;
  height: ${height};
`;
const Arrow = styled.div`
  text-shadow: 1px 1px 1px #fff;
  z-index: 100;
  line-height: ${height};
  text-align: center;
  position: absolute;
  top: 0;
  width: 10%;
  font-size: 3em;
  cursor: pointer;
  user-select: none;
  ${props =>
    props.right
      ? css`
          left: 90%;
        `
      : css`
          left: 0%;
        `}
`;
const Dot = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  text-shadow: 1px 1px 1px #fff;
  user-select: none;
`;
const Dots = styled.span`
  text-align: center;
  width: ${width};
  z-index: 100;
`;

const CarouselUI = ({ position, total, handleClick, children }) => (
  <Container>
    <Children>
      {children}
      <Arrow onClick={handleClick} data-position={position - 1}>
        {"<"}
      </Arrow>
      <Arrow right onClick={handleClick} data-position={position + 1}>
        {">"}
      </Arrow>
    </Children>
    <Dots>
      {Array(...Array(total)).map((val, index) => (
        <Dot key={index} onClick={handleClick} data-position={index}>
          {index === position ? "● " : "○ "}
        </Dot>
      ))}
    </Dots>
  </Container>
);
const Carousel = makeCarousel(CarouselUI);

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
        <BoatContainer key={boat._id}>
          <BoatInfo key={`${boat._id}${i + 1}`}>{boat.boatName}</BoatInfo>
          <BoatInfo key={`${boat._id}${i + 2}`}>{boat.manufacture}</BoatInfo>
          <BoatInfo key={`${boat._id}${i + 3}`}>{boat.year}</BoatInfo>
          <BoatInfo key={`${boat._id}${i + 4}`}>{boat.crewBio}</BoatInfo>
          <Carousel>{this.renderImages(boat.imgs)}</Carousel>
        </BoatContainer>
      );
    });
  };

  render() {
    return <div>{this.showBoats()}</div>;
  }
}

export default AllBoats;
