import { motion } from "framer-motion";

export default function Dining() {
  const dining = [
    {
      id: 1,
      name: "Sage & Salt",
      desc: "All-day dining with international and local cuisine.",
      image: "/public/dining1.jpg",
    },
    {
      id: 2,
      name: "The Liquid Library",
      desc: "Rooftop bar with signature cocktails and city views.",
      image: "/public/dining2.jpg",
    },
    {
      id: 3,
      name: "Private Dining",
      desc: "Elegant private dining experience for special occasions.",
      image: "/public/dining3.jpg",
    },
  ];

  return (
    <section className="rooms">
      <h2>Dining Experiences</h2>

      <div className="room-grid">
        {dining.map((item) => (
          <motion.div
            key={item.id}
            className="room-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src={item.image} alt={item.name} />
            <div className="room-info">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <button>View Menu</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}