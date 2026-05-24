import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Contact Us</h2>

        <div className="contact-content">
          {/* CONTACT INFO */}
          <div className="contact-info-box">
            <div className="info-card">
              <span className="info-icon">📞</span>
              <h3>Phone</h3>
              <p>+92 (21) 1234-5678</p>
              <p>Available 24/7</p>
            </div>

            <div className="info-card">
              <span className="info-icon">📧</span>
              <h3>Email</h3>
              <p>support@foodhub.com</p>
              <p>info@foodhub.com</p>
            </div>

            <div className="info-card">
              <span className="info-icon">📍</span>
              <h3>Location</h3>
              <p>Karachi, Pakistan</p>
              <p>123 Food Street, Downtown</p>
            </div>

            <div className="info-card">
              <span className="info-icon">🕐</span>
              <h3>Hours</h3>
              <p>Mon - Sun: 10 AM - 11 PM</p>
              <p>Holidays: 12 PM - 10 PM</p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="contact-form-box">
            <h3>Send us a Message</h3>
            {submitted && (
              <div className="success-message">
                ✓ Thank you! We'll get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                rows="5"
                required
              ></textarea>
              <button type="submit" className="form-submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
