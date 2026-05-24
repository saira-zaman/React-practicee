import React, { useState } from "react";

const Header = ({ user, onLogin, onLogout, menuList = [], onFilterChange }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showMenuDropdown, setShowMenuDropdown] = useState(false);

  const handleLogin = () => {
    if (formData.email && formData.password) {
      onLogin(formData.email);
      setFormData({ email: "", password: "" });
      setShowLoginModal(false);
    }
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFilterClick = (category) => {
    onFilterChange(category);
    setShowMenuDropdown(false);
    // Scroll to menu
    const menuElement = document.getElementById("menu");
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: "smooth" });
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
            <a
              href="/"
              onClick={(e) => handleNavClick(e, "home")}
              className="nav-link active"
            >
              Home
            </a>

            {/* DROPDOWN MENU */}
            <div className="nav-dropdown">
              <button
                className="nav-link dropdown-toggle"
                onClick={() => setShowMenuDropdown(!showMenuDropdown)}
              >
                Menu ▼
              </button>
              {showMenuDropdown && (
                <div className="dropdown-menu">
                  {menuList.map((category) => (
                    <button
                      key={category}
                      className="dropdown-item"
                      onClick={() => handleFilterClick(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/"
              onClick={(e) => handleNavClick(e, "about")}
              className="nav-link"
            >
              About
            </a>

            <a
              href="/"
              onClick={(e) => handleNavClick(e, "contact")}
              className="nav-link"
            >
              Contact
            </a>
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
