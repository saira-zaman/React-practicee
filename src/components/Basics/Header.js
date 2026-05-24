import React, { useState } from "react";

const Header = ({ user, onLogin, onLogout }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleLogin = () => {
    if (formData.email && formData.password) {
      onLogin(formData.email);
      setFormData({ email: "", password: "" });
      setShowLoginModal(false);
    }
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          {/* LOGO SECTION */}
          <div className="header-logo">
            <div className="logo-icon">🍽️</div>
            <div className="logo-text">
              <h1 className="brand-name">FoodHub</h1>
              <p className="brand-tagline">Premium Dining</p>
            </div>
          </div>

          {/* CENTER - NAV LINKS */}
          <nav className="header-nav">
            <a href="#home" className="nav-link active">Home</a>
            <a href="#menu" className="nav-link">Menu</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          {/* RIGHT - BUTTONS */}
          <div className="header-actions">
            {user ? (
              <div className="user-section">
                <span className="user-info">
                  <span className="user-icon">👤</span>
                  <span className="user-name">{user}</span>
                </span>
                <button
                  className="btn btn-logout"
                  onClick={onLogout}
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                className="btn btn-login"
                onClick={() => setShowLoginModal(true)}
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </header>

      {/* LOGIN MODAL */}
      {showLoginModal && (
        <div className="modal-overlay" onClick={() => setShowLoginModal(false)}>
          <div className="login-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Sign In to Your Account</h2>
              <button
                className="close-btn"
                onClick={() => setShowLoginModal(false)}
              >
                ✕
              </button>
            </div>
            <div className="modal-body">
              <input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="modal-input"
              />
              <input
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="modal-input"
              />
              <button className="modal-login-btn" onClick={handleLogin}>
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
