import React from "react";
import preloaderImg from "../../assets/preloader.svg";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader__img">
        <img src={preloaderImg} alt="loading..." />
      </div>
    </div>
  );
};

export default Preloader;
