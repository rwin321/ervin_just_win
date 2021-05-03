import React, { Fragment, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../home/Home";

const About = lazy(() => import("../about/About"));
const Contact = lazy(() => import("../contact/Contact"));
const Projects = lazy(() => import("../projects/Projects"));

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
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default Routing;
