import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_66gvisg",
      "template_baych6o",
      formData,
      "hveDwVoG3kTsDKDzQ"
    )
    .then(() => {
      alert("Message sent successfully!");
      setFormData({
        user_name: "",
        user_email: "",
        subject: "",
        message: ""
      });
    })
    .catch(() => {
      alert("Failed to send message.");
    });
  };

  return (
    <section className="contact-luxury">
      
      {/* HERO */}
      <div className="contact-hero">
        <h1>Get in Touch</h1>
        <p>
          We’d love to hear from you. Whether it’s a stay, event, or dining
          inquiry — our team is ready.
        </p>
      </div>

      {/* CONTENT */}
      <div className="contact-container">

        {/* FORM */}
        <motion.form
          className="contact-form-luxury"
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2>Send Us a Message</h2>

          <div className="input-group">
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              required
            />
            <label>Full Name</label>
          </div>

          <div className="input-group">
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              required
            />
            <label>Email Address</label>
          </div>

          <div className="input-group">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <label>Subject</label>
          </div>

          <div className="input-group">
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <label>Your Message</label>
          </div>

          <button type="submit">Send Message</button>
        </motion.form>

        {/* INFO CARD */}
        <motion.div
          className="contact-info-luxury"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2>Four Points by Sheraton</h2>

          <p>
            Experience comfort, elegance, and world-class hospitality in the
            heart of Chennai.
          </p>

          <div className="info-item">
            <span>📍</span>
            <p>Velachery, Chennai, Tamil Nadu</p>
          </div>

          <div className="info-item">
            <span>📞</span>
            <p>+91 44 1234 5678</p>
          </div>

          <div className="info-item">
            <span>✉️</span>
            <p>info@fourpointschennai.com</p>
          </div>

          <div className="info-item">
            <span>🕒</span>
            <p>24/7 Guest Support</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}