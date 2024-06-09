import { useContext } from "react";
import CartContext from "../../contexts/CartContext/CartContext";
import "./CartItem.css";

export default function CartItem({ item }) {
  const { removeFromCart, addToCart } = useContext(CartContext);

  return (
    <div key={item} className="cart-container">
      <div className="grid--img--container">
        <img className="grid--img" src={`/${item.product.img}`} />
      </div>
      <div className="grid--item">
        <p>{item.product.titulo}</p>
        <p>$ {item.product.precio}</p>
      </div>
      <p className="grid--item">${item.product.precio * item.quantity}</p>
      <div className="grid--item item__count__container">
        <button
          className="up__down"
          onClick={() => removeFromCart(item.product.id, 1)}
        >
          -
        </button>
        {item.quantity}
        <button className="up__down" onClick={() => addToCart(item.product, 1)}>
          +
        </button>
      </div>
    </div>
  );
}
