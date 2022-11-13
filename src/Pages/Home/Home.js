import React from "react";
import Another from "./Another/Another";
import Banner from "./Banner/Banner";

import InforCards from "./InfoCards/InforCards";
import MakeAppointment from "./MakeAppointment/MakeAppointment";
import Services from "./Services/services";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InforCards></InforCards>
      <Services></Services>
      <Another></Another>
      <MakeAppointment></MakeAppointment>
    </div>
  );
};

export default Home;
