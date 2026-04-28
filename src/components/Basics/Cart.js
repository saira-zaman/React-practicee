const Cart = ({ cart, setCart }) => {

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

  return (
    <div className="cart">

      <h2>🛒 Cart</h2>

      {cart.map((item) => (
        <div key={item.id}>
          <h4>{item.name}</h4>

          <p>
            {item.qty} x {item.price}
          </p>

          <button onClick={() => increase(item.id)}>+</button>
          <button onClick={() => decrease(item.id)}>-</button>

        </div>
      ))}

      <h3>Total: {total} RS</h3>

    </div>
  );
};

export default Cart;