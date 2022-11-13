import React from "react";
import marker from "../../../assets/icons/marker.svg";
import clock from "../../../assets/icons/clock.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const InforCards = () => {
  const cartData = [
    {
      id: 1,
      name: "opening hour",
      description: "Open 9am to 7 am",
      icon: clock,
      bgClass: "bg-gradient-to-r from-primary to-secondary",
    },
    {
      id: 2,
      name: "Our Locations",
      description: "Open 9am to 7 am",
      icon: marker,
      bgClass: "bg-accent",
    },
    {
      id: 3,
      name: "Contact Us",
      description: "Open 9am to 7 am",
      icon: phone,
      bgClass: "bg-primary",
    },
  ];
  return (
    <div className="grid mt-8 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {cartData.map((card) => (
        <InfoCard key={card.id} card={card}></InfoCard>
      ))}
    </div>
  );
};

export default InforCards;
