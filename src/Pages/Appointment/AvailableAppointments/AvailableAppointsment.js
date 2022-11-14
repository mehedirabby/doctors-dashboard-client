import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AppointOption from "./AppointOption";
import BookingModal from "../BookingModal/BookingModal";

const AvailableAppointsment = ({ selectedDate, setSelectedDate }) => {
  const [appointmentOption, setAppointmentOption] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("AppointmentOption.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOption(data));
  }, []);
  return (
    <section className="my-16">
      <p className="text-center text-secondery font-bold">
        Available Appointments on {format(selectedDate, "PP")}
      </p>
      <div className="grid gap-6 grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-3">
        {appointmentOption.map((option) => (
          <AppointOption
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatment}
          ></AppointOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
          setTreatment={setTreatment}
          selectedDate={selectedDate}
          treatment={treatment}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointsment;
