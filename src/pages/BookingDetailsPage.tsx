"use client";
import type { Reservation } from "@/types/reservation";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingDetailsPage: React.FC = () => {
 const navigate = useNavigate();
  const [reservation, setReservation] = useState<Reservation | null>(null);

  useEffect(() => {
    const data = localStorage.getItem("reservationData");
    if (data) {
      setReservation(JSON.parse(data));
    }
  }, []);

  const cancelBooking = () => {
    localStorage.removeItem("reservationData");
    navigate("/reservation");
  };

  if (!reservation) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl text-gray-600">No booking found.</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Your Booking Details</h2>
        <div className="space-y-2 text-gray-800">
          <p><strong>Name:</strong> {reservation.name}</p>
          <p><strong>Email:</strong> {reservation.email}</p>
          <p><strong>Check-in:</strong> {reservation.checkIn}</p>
          <p><strong>Check-out:</strong> {reservation.checkOut}</p>
          <p><strong>Guests:</strong> {reservation.guests}</p>
          <p><strong>Room Type:</strong> {reservation.roomType}</p>
          <p><strong>Seats:</strong> {reservation.seats}</p>
          <p><strong>Reason:</strong> {reservation.reason}</p>
        </div>
        <button
          onClick={cancelBooking}
          className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md"
        >
          Cancel Booking
        </button>
      </div>
    </div>
  );
};

export default BookingDetailsPage;
