import React from "react";
import preloader from "../../assets/preloader.svg";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader__img">
        <img src={preloader} alt="loading..." />
      </div>
    </div>
  );
};

export default Preloader;
