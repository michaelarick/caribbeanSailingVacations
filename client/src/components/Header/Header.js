import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import NavStyles from "../styles/NavStyles";

const StyledHeader = styled.header`
  .bar {
    border-bottom: 10px solid ${props => props.theme.offWhite};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${props => props.theme.offWhite};
  }
`;

const Logo = styled.h1`
  font-size: 2.5rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  a {
    padding: 0.5rem 1rem;
    background: ${props => props.theme.turquoise};
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const Header = props => {
  return props.loggedIn ? (
    <StyledHeader>
      <div className="bar">
        <Logo>
          <Link to="/">Caribbean Sailing Vacations</Link>
        </Logo>
        <NavStyles>
          <Link to="/boats">Our Boats</Link>
        </NavStyles>
      </div>
      <div className="sub-bar" />
    </StyledHeader>
  ) : (
    <StyledHeader>
      <div className="bar">
        <Logo>
          <Link to="/">Caribbean Sailing Vacations</Link>
        </Logo>
        <NavStyles>
          <Link to="/boats">Our Boats</Link>
          <Link to="/sign-in">Log In</Link>
          <Link to="/sign-up">Register</Link>
        </NavStyles>
      </div>
      <div className="sub-bar" />
    </StyledHeader>
  );
};

export default Header;
