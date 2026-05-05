import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Booking() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const room = state?.room;

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  // ✅ PROTECTION: block access if not logged in
  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      alert("⚠️ Please login first");
      navigate("/login");
    }
  }, []);

  // ❌ If no room selected
  if (!room) {
    return <h2 className="booking-error">No room selected.</h2>;
  }

  const calculateNights = () => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = (end - start) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 0;
  };

  const handleConfirmBooking = () => {
    const user = localStorage.getItem("user"); // extra safety
    const nights = calculateNights();

    // ✅ double protection
    if (!user) {
      alert("⚠️ Please login first");
      navigate("/login");
      return;
    }

    if (!checkIn || !checkOut || nights <= 0) {
      alert("Please select valid dates.");
      return;
    }

    const bookingData = {
      roomName: room.name,
      pricePerNight: room.price,
      checkIn,
      checkOut,
      guests,
      nights,
      totalPrice: nights * room.price,
      bookedAt: new Date().toLocaleString(),
    };

    localStorage.setItem("hotelBooking", JSON.stringify(bookingData));

    // ✅ mark booking done
    localStorage.setItem("bookingDone", "true");

    navigate("/success");
  };

  const nights = calculateNights();
  const totalPrice = nights * room.price;

  return (
    <div className="booking-container">
      <div className="booking-card">

        <div className="booking-image">
          <img src={room.image} alt={room.name} />
        </div>

        <div className="booking-content">
          <h2>Book {room.name}</h2>
          <p className="price">₹{room.price.toLocaleString()} / night</p>

          <div className="form-group">
            <label>Check-In</label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Check-Out</label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Guests</label>
            <input
              type="number"
              min="1"
              max="6"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>

          {nights > 0 && (
            <div className="booking-summary">
              <p>Total Nights: {nights}</p>
              <p>Total Price: ₹{totalPrice.toLocaleString()}</p>
            </div>
          )}

          <button className="confirm-btn" onClick={handleConfirmBooking}>
            Confirm Booking
          </button>

        </div>
      </div>
    </div>
  );
}