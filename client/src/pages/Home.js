import React from "react";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <div
      className="center-align"
      style={{ marginTop: "200px", textAlign: "center", fontSize: "3rem" }}
    >
      <Fade bottom cascade>
        <h1>Boutique Sailing Adventures</h1>
        <h3>WEEK LONG ALL-INCLUSIVE SAILING VACATIONS.</h3>
        <h3>STARTING AT $2,000 PER PERSON</h3>
      </Fade>
    </div>
  );
};

export default Home;
