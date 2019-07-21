import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavStyles = React.lazy(() => import("../styles/NavStyles"));

const StyledHeader = styled.header`
  .bar {
    border-bottom: 10px solid ${props => props.theme.transparentGrey};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    background-color: rgba(200, 200, 200, 0.4);

    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${props => props.theme.transparentGrey};
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
    color: ${props => props.theme.turquoise};
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

class Header extends React.Component {
  render() {
    return this.props.display() ? (
      <StyledHeader>
        <div className="bar">
          <Logo>
            <Link to="/">Charter Assistant</Link>
          </Logo>
          <NavStyles>
            <Link to="/sign-out">Sign Out</Link>
          </NavStyles>
        </div>
        <div className="sub-bar" />
      </StyledHeader>
    ) : (
      <StyledHeader>
        <div className="bar">
          <Logo>
            <Link to="/">Charter Assistant</Link>
          </Logo>
          <NavStyles>
            <Link to="/sign-up">Register</Link>
          </NavStyles>
        </div>
        <div className="sub-bar" />
      </StyledHeader>
    );
  }
}

export default Header;
