import React, { useState } from "react";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    // You can connect backend or Firebase here later
    alert("Login Successful (Demo)");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>🍽️ Restaurant Login</h2>
        <p>Welcome back! Please login to continue</p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit">Login</button>

          <p className="signup">
            Don’t have an account? <a href="#">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;