import React, { useState } from "react";

const OrderConfirmation = ({ isOpen, cart, user, onConfirm, onClose }) => {
  const [step, setStep] = useState(1); // 1: Summary, 2: OTP, 3: Success
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [orderNumber, setOrderNumber] = useState("");

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const handleInitiateOtp = () => {
    // Generate a random 4-digit OTP
    const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(newOtp);
    setStep(2);
    // In real app, this would be sent via SMS/Email
    console.log(`OTP sent: ${newOtp}`);
  };

  const handleVerifyOtp = () => {
    if (otp === generatedOtp) {
      // Generate order number
      const orderNum = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 5).toUpperCase()}`;
      setOrderNumber(orderNum);
      setStep(3);
      // Call onConfirm to clear cart
      setTimeout(() => {
        onConfirm();
      }, 2000);
    } else {
      alert("❌ Invalid OTP! Please try again.");
      setOtp("");
    }
  };

  const handleSkipOtp = () => {
    const orderNum = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 5).toUpperCase()}`;
    setOrderNumber(orderNum);
    setStep(3);
    setTimeout(() => {
      onConfirm();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="order-confirmation-modal" onClick={(e) => e.stopPropagation()}>
        {/* STEP 1: ORDER SUMMARY */}
        {step === 1 && (
          <>
            <div className="modal-header">
              <h2>📦 Order Summary</h2>
              <button className="close-btn" onClick={onClose}>✕</button>
            </div>

            <div className="modal-body order-summary">
              <div className="order-section">
                <h3>Your Items:</h3>
                <div className="order-items">
                  {cart.map((item) => (
                    <div key={item.id} className="order-item">
                      <div className="item-details">
                        <span className="item-name">{item.name}</span>
                        <span className="item-qty">x {item.qty}</span>
                      </div>
                      <span className="item-price">Rs {item.price * item.qty}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="order-divider"></div>

              <div className="order-section">
                <div className="order-stat">
                  <span>Items:</span>
                  <span className="stat-value">{itemCount}</span>
                </div>
                <div className="order-stat">
                  <span>Subtotal:</span>
                  <span className="stat-value">Rs {total}</span>
                </div>
                <div className="order-stat">
                  <span>Delivery:</span>
                  <span className="stat-value">Rs 150</span>
                </div>
                <div className="order-stat total-stat">
                  <span>Total:</span>
                  <span className="stat-value-total">Rs {total + 150}</span>
                </div>
              </div>

              {user && (
                <div className="user-info-order">
                  <strong>👤 Customer:</strong> {user}
                </div>
              )}

              <div className="order-actions">
                <button className="btn-cancel" onClick={onClose}>Cancel</button>
                <button className="btn-confirm" onClick={handleInitiateOtp}>Continue to Payment</button>
              </div>
            </div>
          </>
        )}

        {/* STEP 2: OTP VERIFICATION */}
        {step === 2 && (
          <>
            <div className="modal-header">
              <h2>🔐 Verify Payment</h2>
              <button className="close-btn" onClick={onClose}>✕</button>
            </div>

            <div className="modal-body otp-section">
              <div className="otp-message">
                <p>📱 An OTP has been sent to your registered mobile number</p>
                <p className="otp-code-display">OTP: <span>{generatedOtp}</span></p>
              </div>

              <div className="otp-input-group">
                <label>Enter OTP:</label>
                <input
                  type="text"
                  placeholder="Enter 4-digit OTP"
                  maxLength="4"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                  className="otp-input"
                />
              </div>

              <div className="otp-actions">
                <button className="btn-cancel" onClick={() => setStep(1)}>Back</button>
                <button 
                  className="btn-confirm" 
                  onClick={handleVerifyOtp}
                  disabled={otp.length !== 4}
                >
                  Verify OTP
                </button>
              </div>

              <button className="btn-skip-otp" onClick={handleSkipOtp}>Skip OTP</button>
            </div>
          </>
        )}

        {/* STEP 3: ORDER SUCCESS */}
        {step === 3 && (
          <div className="modal-body success-section">
            <div className="success-animation">
              <div className="checkmark">✓</div>
            </div>

            <h2>✨ Order Placed Successfully!</h2>

            <div className="order-details">
              <p>Thank you for your order!</p>
              <div className="order-number-box">
                <span className="label">Order Number:</span>
                <span className="order-number">{orderNumber}</span>
              </div>

              <div className="delivery-info">
                <p>🚗 Estimated Delivery Time: <strong>30-40 minutes</strong></p>
                <p>📍 We'll notify you when your order is on the way</p>
              </div>
            </div>

            <p className="closing-msg">Redirecting to menu...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderConfirmation;
