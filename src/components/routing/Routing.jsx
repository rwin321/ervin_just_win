import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import About from "../about/About";
import Aim from "../aim/Aim";
import Home from "../home/Home";
import Projects from "../projects/Projects";

const Routing = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/aim">
          <Aim />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default Routing;
