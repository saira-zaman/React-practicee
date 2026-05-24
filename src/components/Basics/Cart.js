const Cart = ({ cart, setCart, onCheckout }) => {

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const increase = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  const decrease = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="cart">

      <h2>🛒 Cart</h2>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <p className="empty-cart-emoji">🍽️</p>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item-new">
              <div className="cart-item-info">
                <h4 className="cart-item-name">{item.name}</h4>
                <p className="cart-item-price">Rs {item.price}</p>
              </div>

              <div className="cart-item-controls">
                <button onClick={() => decrease(item.id)} className="qty-btn">−</button>
                <span className="qty-display">{item.qty}</span>
                <button onClick={() => increase(item.id)} className="qty-btn">+</button>
                <button onClick={() => removeItem(item.id)} className="remove-btn">🗑️</button>
              </div>

              <div className="cart-item-total">
                Rs {item.price * item.qty}
              </div>
            </div>
          ))}

          <div className="cart-divider"></div>

          <div className="cart-total-section">
            <div className="total-row">
              <span>Subtotal:</span>
              <span>Rs {total}</span>
            </div>
            <div className="total-row">
              <span>Delivery:</span>
              <span>Rs 150</span>
            </div>
            <div className="total-row total-final">
              <span>Total:</span>
              <span>Rs {total + 150}</span>
            </div>
          </div>

          <button 
            className="checkout-btn-main" 
            onClick={onCheckout}
          >
            Proceed to Checkout 🛍️
          </button>
        </>
      )}

    </div>
  );
};

export default Cart;