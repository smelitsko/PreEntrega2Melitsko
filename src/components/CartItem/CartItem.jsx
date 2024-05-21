import { useContext } from "react";
import CartContext from "../../contexts/CartContext/CartContext";
import "./CartItem.css";

export default function CartItem({ item }) {
  const { removeFromCart, addToCart } = useContext(CartContext);

  return (
    <div key={item} className="carrito-contenido">
      <p>{item.product.titulo}</p>
      <p>Cantidad: {item.quantity}</p>
      <p>Precio: ${item.product.precio}</p>
      <div className="">
        <button className="" onClick={() => removeFromCart(item.product.id, 1)}>
          -
        </button>
        <button className="" onClick={() => addToCart(item.product, 1)}>
          +
        </button>
      </div>
    </div>
  );
}
