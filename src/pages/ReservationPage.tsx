"use client";
import React, { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

type FormData = {
  name: string;
  email: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  roomType: string;
  seats: number;
  reason: string;
};

const ReservationPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    roomType: "standard",
    seats: 1,
    reason: "",
  });

  const [success, setSuccess] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "guests" || name === "seats" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Reservation Data:", formData);
    setSuccess(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          Hotel Reservation
        </h2>

        {success ? (
          <div className="text-center">
            <h3 className="text-green-600 text-lg font-semibold">
              Reservation Successful!
            </h3>
            <p className="text-gray-600 mt-2">
              Thank you, {formData.name}. We've received your booking.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                className="border rounded-lg px-4 py-2 w-full"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="border rounded-lg px-4 py-2 w-full"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="checkIn"
                type="date"
                className="border rounded-lg px-4 py-2 w-full"
                value={formData.checkIn}
                onChange={handleChange}
                required
              />
              <input
                name="checkOut"
                type="date"
                className="border rounded-lg px-4 py-2 w-full"
                value={formData.checkOut}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="guests"
                type="number"
                min="1"
                placeholder="Number of Guests"
                className="border rounded-lg px-4 py-2 w-full"
                value={formData.guests}
                onChange={handleChange}
                required
              />
              <select
                name="roomType"
                className="border rounded-lg px-4 py-2 w-full"
                value={formData.roomType}
                onChange={handleChange}
              >
                <option value="standard">Standard Room</option>
                <option value="deluxe">Deluxe Room</option>
                <option value="suite">Suite</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="seats"
                type="number"
                min="1"
                placeholder="Number of Seats"
                className="border rounded-lg px-4 py-2 w-full"
                value={formData.seats}
                onChange={handleChange}
              />
              <input
                name="reason"
                type="text"
                placeholder="Reason for Booking (e.g., Vacation, Meeting)"
                className="border rounded-lg px-4 py-2 w-full"
                value={formData.reason}
                onChange={handleChange}
              />
            </div>

            <button
              onClick={() => navigate("/reservation-details")}
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
            >
              Book Now
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ReservationPage;
