import React from "react";
import "../../../App.css";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../Component/PrimaryButton/PrimaryButton";

const Contact = () => {
  return (
    <section
      className="mt-32 p-16"
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className="App ">
        <h2 className="text-xl text-primary font-semibold">Contact Us</h2>
        <h2 className="text-3xl text-white">Stay Connected With Us</h2>
      </div>
      <div className="App mt-6">
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered lg:w-1/3 w-full  max-w-xs"
        />
        <br />
        <input
          type="text"
          placeholder="subject"
          className="input mt-3 input-bordered lg:w-1/3  w-full max-w-xs"
        />
        <br />
        <textarea
          className="textarea w-full lg:w-1/4 mt-2"
          placeholder="Your Message"
        ></textarea>
        <br />
        <PrimaryButton>Submit</PrimaryButton>
      </div>
    </section>
  );
};

export default Contact;
