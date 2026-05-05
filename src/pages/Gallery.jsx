import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    "/public/gallery1.jpg",
    "/public/gallery2.jpg",
    "/public/gallery3.jpg",
    "/public/gallery4.jpg",
    "/public/gallery5.jpg",
    "/public/gallery6.jpg",
    "/public/gallery7.jpg",
    "/public/gallery8.avif",
    "/public/gallery9.jpg",
  ];

  return (
    <section className="rooms">
      <h2>Gallery</h2>

      <div className="room-grid">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="room-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img src={img} alt="Hotel Gallery" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}