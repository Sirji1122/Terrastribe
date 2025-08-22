import React, { useState } from "react";
import "../styles/Contact.css";
import axios from "axios";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/contact/send", form);
      setSuccess(res.data.message);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setSuccess("Failed to send message.");
    }
  };
  return (
    <div className="contact-page">
      <h2>📩 Contact Us</h2>
      <p>We’d love to hear from you. Drop your query or feedback below!</p>

      {success && <p className="success-msg">✅ Message sent successfully!</p>}

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}







