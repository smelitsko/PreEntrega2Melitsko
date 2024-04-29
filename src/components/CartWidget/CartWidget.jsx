import CartIcon from "../CartIcon/CartIcon";
import "./CartWidget.css";

function CartWidget() {
  return (
    <div className="cart__widget__wrapper">
      <CartIcon ancho={40} alto={40} />
      <span>7</span>
    </div>
  );
}

export default CartWidget;
