import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadRooms() {
      try {
        const res = await fetch("/rooms.json");

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await res.json();
        setRooms(data);
        setLoading(false);
      } catch (error) {
        console.error("Fetch error:", error);
        setLoading(false);
      }
    }

    loadRooms();
  }, []);

  //  UPDATED FUNCTION (LOGIN CHECK ADDED)
  const handleBooking = (room) => {
    const user = localStorage.getItem("user");

    if (!user) {
      alert("⚠️ Please login to book");
      return;
    }

    //  keep your existing logic
    navigate("/booking", { state: { room } });
  };

  return (
    <section className="rooms">
      <h2>Our Rooms & Suites</h2>

      {loading ? (
        <p style={{ padding: "20px" }}>Loading rooms...</p>
      ) : (
        <div className="room-grid">
          {rooms.map((room) => (
            <motion.div
              key={room.id}
              className="room-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <img src={room.image} alt={room.name} />

              <div className="room-info">
                <h3>{room.name}</h3>
                <p>₹{room.price.toLocaleString()} / night</p>

                {/*  Button unchanged */}
                <button onClick={() => handleBooking(room)}>
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}