import CartWidget from "../CartWidget/CartWidget";
import CategoryList from "../CategoryList/CategoryList";
import "./NavBar.css";
import { useContext } from "react";
import CartContext from "../../contexts/CartContext/CartContext";

function NavBar() {
  const { cart } = useContext(CartContext);

  return (
    <div className="navbar__wrapper">
      <CategoryList />
      <div className={`${cart.length === 0 ? "hidden" : ""}`}>
        <CartWidget />
      </div>
    </div>
  );
}

export default NavBar;
