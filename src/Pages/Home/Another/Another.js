import React from "react";
import treatment from "../../../assets/images/treatment.png";

const Another = () => {
  return (
    <div className="hero mt-8">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={treatment}
          className="max-w-sm rounded-lg shadow-2xl"
          alt=""
        />
        <div className="ml-12">
          <h1 className="text-5xl font-bold">
            Exceptional Dental <br />
            Care,on Your Terms
          </h1>
          <p className="py-6 lg:w-1/2 w-full">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            labore natus repudiandae? Eveniet voluptatem labore, corporis
            dolorem corrupti mollitia possimus hic praesentium quod! Dolores
            facilis voluptates aliquam dolorem nemo repellat?
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Another;
