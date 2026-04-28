import React,{useState} from 'react'
import './style.css'
import Menu from "./menuAPI.js";
import MenuCard from './MenuCard';
import Navbar from './Navbar';
import Cart from "./Cart";
const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];
console.log(uniqueList);


const Restaurant = () => {
 const [menuData, setMenuData] = useState(Menu);
 const [menuList, setMenuList] = useState(uniqueList);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");


const filterItem = (category) => {
  if(category === "All"){
    setMenuData(Menu);
    return;
  }
  const updatedList = Menu.filter((curElem) => {
    return curElem.category === category;
  });
  setMenuData(updatedList);
}
  
  // 🛒 ADD TO CART
  const addToCart = (item) => {
    const exist = cart.find((c) => c.id === item.id);

    if (exist) {
      setCart(
        cart.map((c) =>
          c.id === item.id
            ? { ...c, qty: c.qty + 1 }
            : c
        )
      );
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  // 🔍 SEARCH
  const filteredData = menuData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  <input
  className="search-bar"
  type="text"
  placeholder="🔍 Search food..."
  onChange={(e) => setSearch(e.target.value)}
/>
  
    return (
<> 
      {/* NAVBAR */}
     <Navbar filterItem={filterItem} menuList={menuList} />

      {/* SEARCH BAR */}
      <input
        type="text"
        placeholder="Search food..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* MENU CARDS */}
      <MenuCard
        menuData={filteredData}
        addToCart={addToCart}
      />

      {/* CART */}
      <Cart cart={cart} setCart={setCart} />
</>
  );
};

export default Restaurant;

