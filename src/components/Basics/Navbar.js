import React from "react";

const Navbar = ({ filterItem, menuList = [] }) => {
  return (
    <nav className="navbar-filter">
      <div className="filter-container">
        <h3 className="filter-label">Filter by Category:</h3>
        <div className="filter-buttons-group">
          {menuList.map((curElem) => (
            <button
              key={curElem}
              className="filter-btn-category"
              onClick={() => filterItem(curElem)}
            >
              {curElem}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
