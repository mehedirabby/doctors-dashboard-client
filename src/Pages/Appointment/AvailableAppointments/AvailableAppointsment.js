import React, { useState } from "react";
import { format } from "date-fns";
import AppointOption from "./AppointOption";
import BookingModal from "../BookingModal/BookingModal";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";

const AvailableAppointsment = ({ selectedDate, setSelectedDate }) => {
  // const [appointmentOption, setAppointmentOption] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");

  const {
    data: appointmentOption = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });
  // useEffect(() => {
  //   fetch("http://localhost:5000/appointmentOptions")
  //     .then((res) => res.json())
  //     .then((data) => setAppointmentOption(data));
  // }, []);
  if (isLoading) {
    return <Loading></Loading>;
  }
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
          refetch={refetch}
          setTreatment={setTreatment}
          selectedDate={selectedDate}
          treatment={treatment}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointsment;
