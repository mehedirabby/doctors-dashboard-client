import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
  const date = format(selectedDate, "PP"); //treatment is appiontment options
  const { name, slots } = treatment;
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const pName = form.name.value;
    const email = form.email.value;
    const slot = form.slot.value;
    const phone = form.phone.value;
    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: pName,
      slot,
      email,
      phone,
    };
    console.log(booking);
    setTreatment(null);
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              value={date}
              className="input input-bordered input-accent w-full "
              disabled
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {" "}
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input input-bordered input-primary w-full "
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="input input-bordered input-primary w-full "
              required
            />
            <input
              name="phone"
              type="text"
              placeholder="Your Phone Number"
              className="input input-bordered input-primary w-full "
              required
            />

            <br />
            <input
              className="btn btn-accent w-full "
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
