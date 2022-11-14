import React from "react";
import chair from "../../assets/images/chair.png";

const AppBanner = () => {
  return (
    <header className="mt-12 mb-6">
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="dentist chair"
          />
          <div></div>
        </div>
      </div>
    </header>
  );
};

export default AppBanner;
