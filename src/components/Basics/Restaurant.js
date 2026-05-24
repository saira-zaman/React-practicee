import React, { useState } from "react";
import "./style.css";
import Menu from "./menuAPI.js";
import MenuCard from "./MenuCard";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Cart from "./Cart";
import Toast from "./Toast";

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

  return (
    <>
      {/* HEADER */}
      <Header
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />

      {/* FILTER NAVBAR */}
      <Navbar
        filterItem={filterItem}
        menuList={menuList}
      />

      {/* SEARCH BAR */}
      <div className="search-container">
        <input
          type="text"
          placeholder="🔍 Search food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar-improved"
        />
      </div>

      {/* MENU CARDS */}
      <MenuCard menuData={filteredData} addToCart={addToCart} />

      {/* CART */}
      <Cart cart={cart} setCart={setCart} />

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

