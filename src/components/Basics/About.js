import React from "react";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">About FoodHub</h2>
          <p className="section-text">
            FoodHub is your gateway to culinary excellence. We bring the finest restaurants and cuisines directly to your doorstep with a commitment to quality, freshness, and exceptional service.
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">⚡</span>
              <h3>Fast Delivery</h3>
              <p>Get your food delivered in 30 minutes or less</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">👨‍🍳</span>
              <h3>Chef-Picked</h3>
              <p>Curated by professional chefs</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🥗</span>
              <h3>Fresh Ingredients</h3>
              <p>Only the freshest, premium quality ingredients</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">⭐</span>
              <h3>Top Rated</h3>
              <p>Trusted by thousands of customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
