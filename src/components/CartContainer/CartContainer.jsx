import { useContext } from "react";
import CartContext from "../../contexts/CartContext/CartContext";
import CartItem from "../CartItem/CartItem";
import CartItemHeader from "../CartItemHeader/CartItemHeader";
import { Link } from "react-router-dom";
import "./CartContainer.css";
export default function CartContainer() {
  const { cart, clearCart, cartTotal } = useContext(CartContext);

  return (
    <div className="">
      <h2>Mi Carrito</h2>
      <div className="">
        <CartItemHeader />
        {cart.length === 0 ? (
          <h3>No hay productos en el carrito</h3>
        ) : (
          cart.map((item) => {
            return <CartItem key={item.product.id} item={item} />;
          })
        )}
      </div>

      <div className="cart-footer">
        <p></p>

        <p className="total">Total:</p>

        <p className="total">${cartTotal}</p>
        <p></p>
      </div>
      <div className="button-container">
        <Link to={`/checkout`}>
          <button className="checkout">Terminar la compra</button>
        </Link>
        <button className="checkout black" onClick={clearCart}>
          Limpiar carrito
        </button>
      </div>
    </div>
  );
}
