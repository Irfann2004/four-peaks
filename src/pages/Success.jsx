import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const [booking, setBooking] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("hotelBooking");
    const bookingDone = localStorage.getItem("bookingDone");

    // ✅ PROTECTION: block direct access
    if (!data || bookingDone !== "true") {
      alert("⚠️ Please complete booking first");
      navigate("/rooms");
      return;
    }

    setBooking(JSON.parse(data));

    // ✅ optional: clear flag after entering page
    localStorage.removeItem("bookingDone");
  }, []);

  if (!booking) {
    return (
      <h2 style={{ color: "white", padding: "40px" }}>
        No booking found.
      </h2>
    );
  }

  return (
    <div className="success-container">
      <div className="success-card">
        <h1>🎉 Booking Confirmed!</h1>

        <p><strong>Room:</strong> {booking.roomName}</p>
        <p><strong>Check-In:</strong> {booking.checkIn}</p>
        <p><strong>Check-Out:</strong> {booking.checkOut}</p>
        <p><strong>Guests:</strong> {booking.guests}</p>
        <p>
          <strong>Total Paid:</strong> ₹{booking.totalPrice.toLocaleString()}
        </p>

        <button onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
}