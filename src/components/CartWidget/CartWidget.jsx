import CartIcon from "../CartIcon/CartIcon";
import "./CartWidget.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../contexts/CartContext/CartContext";

function CartWidget() {
  const { cart } = useContext(CartContext);

  const calculateQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Link to={"/cart"}>
      <div className="cart__widget__wrapper">
        <CartIcon ancho={40} alto={40} />
        <span className="rounded-full px-1 text-white bg-amber-400 font-semibold text-sm">
          {calculateQuantity}
        </span>
      </div>
    </Link>
  );
}

export default CartWidget;
