import React from "react";
import Another from "./Another/Another";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";

import InforCards from "./InfoCards/InforCards";
import MakeAppointment from "./MakeAppointment/MakeAppointment";
import ReviewSection from "./ReviewSection/ReviewSection";
import Services from "./Services/services";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InforCards></InforCards>
      <Services></Services>
      <Another></Another>
      <MakeAppointment></MakeAppointment>
      <ReviewSection></ReviewSection>
      <Contact></Contact>
    </div>
  );
};

export default Home;
