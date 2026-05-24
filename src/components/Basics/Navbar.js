import React, { useState } from "react";

const Navbar = ({ filterItem, menuList = [], user, onLogout, onLogin }) => {
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
      <nav className="navbar-improved">
        <div className="navbar-left">
          <div className="logo">
            🍽️ <span className="logo-text">FoodHub</span>
          </div>
        </div>

        <div className="navbar-center">
          <div className="filter-buttons">
            {menuList.map((curElem) => (
              <button
                key={curElem}
                className="filter-btn"
                onClick={() => filterItem(curElem)}
              >
                {curElem}
              </button>
            ))}
          </div>
        </div>

        <div className="navbar-right">
          {user ? (
            <div className="user-section">
              <span className="user-name">👤 {user}</span>
              <button className="logout-btn" onClick={onLogout}>
                Sign Out
              </button>
            </div>
          ) : (
            <button
              className="login-btn"
              onClick={() => setShowLoginModal(true)}
            >
              Sign In
            </button>
          )}
        </div>
      </nav>

      {/* LOGIN MODAL */}
      {showLoginModal && (
        <div className="modal-overlay" onClick={() => setShowLoginModal(false)}>
          <div className="login-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Sign In</h2>
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

export default Navbar;
