import React from "react";
import { format } from "date-fns";

const AvailableAppointsment = ({ selectedDate, setSelectedDate }) => {
  return (
    <section className="ml-16">
      <p className="text-center text-secondery font-bold">
        Available Appointments on {format(selectedDate, "PP")}
      </p>
    </section>
  );
};

export default AvailableAppointsment;
