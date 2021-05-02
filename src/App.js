import React from "react";
import "./styles/main.scss";
import Routing from "./components/routing/Routing";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="app">
      <div className="app__wrapper wrapper">
        <Header />
        <div className="app__content content">
          <Routing />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
