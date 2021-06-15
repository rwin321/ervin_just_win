import { Fragment, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../home/Home";
import Preloader from "../../common/preloader/Preloader";
import { MinimumSpinnerDelay } from "../../common/MinimumSpinnerDelay";

const About = MinimumSpinnerDelay(import("../about/About"));
const Contact = MinimumSpinnerDelay(import("../contact/Contact"));
const Projects = MinimumSpinnerDelay(import("../projects/Projects"));

const Routing = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About title="About" subTitle="Small information about me" />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Suspense>
    </Fragment>
  );
};

export default Routing;
