import React, { useState } from "react";
import AppBanner from "./AppBanner";
import AvailableAppointsment from "./AvailableAppointments/AvailableAppointsment";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <AppBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AppBanner>
      <AvailableAppointsment
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AvailableAppointsment>
    </div>
  );
};

export default Appointment;
