import React, { useState } from "react";
import "./style.css";
import Menu from "./menuAPI.js";
import MenuCard from "./MenuCard";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Cart from "./Cart";
import Toast from "./Toast";
import About from "./About";
import Contact from "./Contact";
import OrderConfirmation from "./OrderConfirmation";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList] = useState(uniqueList);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };

  // 🛒 ADD TO CART
  const addToCart = (item) => {
    const exist = cart.find((c) => c.id === item.id);

    if (exist) {
      setCart(
        cart.map((c) =>
          c.id === item.id ? { ...c, qty: c.qty + 1 } : c
        )
      );
      setToastMessage(`${item.name} quantity updated! ✓`);
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
      setToastMessage(`${item.name} added to cart! 🛒`);
    }
    setShowToast(true);
  };

  // 🔍 SEARCH
  const filteredData = menuData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // 👤 AUTH HANDLERS
  const handleLogin = (email) => {
    setUser(email);
    setToastMessage(`Welcome ${email}! 👋`);
    setShowToast(true);
  };

  const handleLogout = () => {
    setUser(null);
    setCart([]);
    setToastMessage("You have been signed out!");
    setShowToast(true);
  };

  // 📦 CHECKOUT HANDLER
  const handleCheckout = () => {
    if (cart.length === 0) {
      setToastMessage("❌ Your cart is empty!");
      setShowToast(true);
      return;
    }
    if (!user) {
      setToastMessage("⚠️ Please sign in to place an order!");
      setShowToast(true);
      return;
    }
    setShowOrderConfirmation(true);
  };

  // ✅ ORDER CONFIRMATION HANDLER
  const handleOrderConfirmed = () => {
    setToastMessage("✅ Order placed successfully! Preparing your food...");
    setShowToast(true);
    setCart([]);
    setShowOrderConfirmation(false);
  };

  return (
    <>
      {/* HEADER WITH NAVIGATION */}
      <Header
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
        menuList={menuList}
        onFilterChange={filterItem}
      />

      {/* SEARCH NAVBAR */}
      <Navbar
        search={search}
        onSearchChange={(value) => setSearch(value)}
      />

      {/* HOME SECTION - MENU */}
      <section id="home" className="menu-section">
        <div className="menu-header">
          <h2>Explore Our Menu</h2>
          <p>Premium dishes crafted by our expert chefs</p>
        </div>

        {/* MENU CARDS */}
        <MenuCard menuData={filteredData} addToCart={addToCart} />
      </section>

      {/* ABOUT SECTION */}
      <About />

      {/* CONTACT SECTION */}
      <Contact />

      {/* CART */}
      <Cart cart={cart} setCart={setCart} onCheckout={handleCheckout} />

      {/* ORDER CONFIRMATION MODAL */}
      <OrderConfirmation
        isOpen={showOrderConfirmation}
        cart={cart}
        user={user}
        onConfirm={handleOrderConfirmed}
        onClose={() => setShowOrderConfirmation(false)}
      />

      {/* FOOTER */}
      <Footer />

      {/* TOAST NOTIFICATION */}
      {showToast && (
        <Toast
          message={toastMessage}
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
};

export default Restaurant;

