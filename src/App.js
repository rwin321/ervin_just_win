import { Suspense } from "react";
import "./styles/main.scss";
import Routing from "./components/Routing/Routing";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Preloader from "./common/Preloader/Preloader";

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
