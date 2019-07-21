import React from "react";
import Fade from "react-reveal/Fade";
import SignIn from "./SignIn";

const Home = () => {
  return (
    <div
      className="center-align"
      style={{ marginTop: "10rem", textAlign: "center", fontSize: "3rem" }}
    >
      <Fade bottom cascade>
        <SignIn />
      </Fade>
    </div>
  );
};

export default Home;
