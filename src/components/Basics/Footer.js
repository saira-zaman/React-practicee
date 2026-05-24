import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* COLUMN 1 - ABOUT */}
        <div className="footer-column">
          <h3 className="footer-title">About FoodHub</h3>
          <p className="footer-text">
            Discover the finest culinary experiences with our premium food delivery service. Quality, freshness, and taste guaranteed.
          </p>
          <div className="social-links">
            <a href="/" onClick={handleLinkClick} className="social-link" title="Facebook">📘</a>
            <a href="/" onClick={handleLinkClick} className="social-link" title="Twitter">🐦</a>
            <a href="/" onClick={handleLinkClick} className="social-link" title="Instagram">📷</a>
          </div>
        </div>

        {/* COLUMN 2 - QUICK LINKS */}
        <div className="footer-column">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/" onClick={handleLinkClick}>Home</a></li>
            <li><a href="/" onClick={handleLinkClick}>Menu</a></li>
            <li><a href="/" onClick={handleLinkClick}>Reservations</a></li>
            <li><a href="/" onClick={handleLinkClick}>Careers</a></li>
            <li><a href="/" onClick={handleLinkClick}>Blog</a></li>
          </ul>
        </div>

        {/* COLUMN 3 - POLICIES */}
        <div className="footer-column">
          <h3 className="footer-title">Policies</h3>
          <ul className="footer-links">
            <li><a href="/" onClick={handleLinkClick}>Privacy Policy</a></li>
            <li><a href="/" onClick={handleLinkClick}>Terms & Conditions</a></li>
            <li><a href="/" onClick={handleLinkClick}>Shipping Info</a></li>
            <li><a href="/" onClick={handleLinkClick}>Returns Policy</a></li>
            <li><a href="/" onClick={handleLinkClick}>FAQ</a></li>
          </ul>
        </div>

        {/* COLUMN 4 - CONTACT */}
        <div className="footer-column">
          <h3 className="footer-title">Contact Us</h3>
          <div className="contact-info">
            <p>📞 +92 (21) 1234-5678</p>
            <p>📧 info@foodhub.com</p>
            <p>📍 Karachi, Pakistan</p>
          </div>
          <div className="payment-methods">
            <span className="payment-icon" title="Credit Card">💳</span>
            <span className="payment-icon" title="Bank Transfer">🏦</span>
            <span className="payment-icon" title="Mobile Payment">📱</span>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} FoodHub. All rights reserved.</p>
        <p>Premium Dining Experience | Crafted with ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;
