import React from "react";

const Navbar = ({ search, onSearchChange }) => {
  return (
    <nav className="navbar-search">
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="🔍 Search food..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-bar-input"
        />
      </div>
    </nav>
  );
};

export default Navbar;
