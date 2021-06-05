import React, { Suspense } from "react";
import "./styles/main.scss";
import Routing from "./components/routing/Routing";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Preloader from "./common/preloader/Preloader";

const App = () => {
  return (
    <div className="app">
      <Suspense fallback={<Preloader />}>
        <div className="app__wrapper wrapper">
          <Header />
          <div className="app__content content">
            <Routing />
          </div>
          <Footer />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
