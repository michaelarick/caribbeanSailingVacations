import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1.5rem;
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  height: 52rem;
  border: 1px solid red;
  @media screen and (max-width: 600px) {
    margin-top: 1rem;
  }
`;

const Home = () => {
  return (
    <div
      className="center-align"
      style={{ marginTop: "10rem", textAlign: "center", fontSize: "3rem" }}
    >
      <Fade bottom cascade>
        <h1>Boutique Sailing Adventures</h1>
        <h4>WEEK LONG ALL-INCLUSIVE SAILING VACATIONS.</h4>
        <h4>STARTING AT $2,000 PER PERSON</h4>
      </Fade>
      <Fade>
        <h1>Boutique sailing vacations for every budget.</h1>
        <p>
          We have hand selected yachts out of many different management
          operations in the Caribbean to bring you the best possible vacation
          for your budget. We have met with crews and in many cases eaten the
          foods of the fantastic chefs on board. We own our vacation and are
          sure that you will love your time aboard.
        </p>
        <p>
          It is our hope to bring our love of sailing and the beautiful
          Caribbean to as many people who are adventurous to give it a try. We
          want to make the process of selecting the perfect boat and crew for
          you as simple as possible. To make this possible we have created a
          “Boat Match”. Simply fill out our survey and we will match you with
          what we believe to be the best potential boat options.
        </p>
      </Fade>
      <Fade>
        <Container>
          <Card>
            <h2>Destinations</h2>
          </Card>
          <Card>
            <h2>Yachts</h2>
          </Card>
          <Card>
            <h2>Crews</h2>
          </Card>
        </Container>
      </Fade>
    </div>
  );
};

export default Home;
