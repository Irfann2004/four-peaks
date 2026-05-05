import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="home-luxury">
      {/* HERO */}
      <div className="lux-hero">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Four Peaks by Sheraton
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Where refined comfort meets contemporary elegance in the heart of
          Chennai.
        </motion.p>
      </div>

      {/* OVERVIEW */}
      <div className="lux-section">
        <h2>Designed for the Modern Traveler</h2>
        <p>
          Four Points by Sheraton Chennai Velachery offers an elevated stay
          experience with spacious rooms, intuitive design, and thoughtful
          hospitality.
        </p>
        <p>
          From seamless business connectivity to indulgent leisure spaces, every
          element is curated to bring balance, comfort, and calm.
        </p>
      </div>

      {/* HIGHLIGHTS */}
      <div className="lux-highlights">
        {[
          "Spacious Contemporary Rooms",
          "Signature Dining Experiences",
          "Rooftop Lounge & Bar",
          "Wellness & Fitness Centre",
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <span>—</span>
            <p>{item}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="lux-cta">
        <p>Experience understated luxury, crafted around you.</p>
        <a href="/rooms">Plan Your Stay</a>
      </div>
    </section>
  );
}