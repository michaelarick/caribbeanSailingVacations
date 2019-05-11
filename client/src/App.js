import React, { Component, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled, { css } from "styled-components";

const AddBoat = React.lazy(() => import("./pages/AddBoat"));
const AllBoats = React.lazy(() => import("./pages/AllBoats"));
const BoatDetail = React.lazy(() => import("./pages/BoatDetail"));
const Home = React.lazy(() => import("./pages/Home"));
const Page = React.lazy(() => import("./components/Page"));
const SignIn = React.lazy(() => import("./pages/SignIn"));
const SignUp = React.lazy(() => import("./pages/SignUp"));
const SignOut = React.lazy(() => import("./pages/SignOut"));

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: url("https://res.cloudinary.com/dui3yyhou/image/upload/v1557514748/CaribbeanSailingVacations/artem-pochepetsky-127749-unsplash.jpg");
  height: 100%;
  width: 100%;
  z-index: -1;
  background-size: 100% 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: rgba(0.4, 0.4, 0.4, 0.3);
  background-blend-mode: multiply;
  background-repeat: no-repeat;
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Background>
            <Page>
              <Switch>
                <Route exact path="/add-boat" component={AddBoat} />
                <Route exact path="/boats" component={AllBoats} />
                <Route exact path="/sign-in" component={SignIn} />
                <Route exact path="/sign-up" component={SignUp} />
                <Route exact path="/sign-out" component={SignOut} />
                <Route path="/boat/:id" component={BoatDetail} />
                <Route path="/" component={Home} />
              </Switch>
            </Page>
          </Background>
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
