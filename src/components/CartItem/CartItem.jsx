import { useContext } from "react";
import CartContext from "../../contexts/CartContext/CartContext";
import "./CartItem.css";

export default function CartItem({ item }) {
  const { removeFromCart, addToCart } = useContext(CartContext);

  return (
    <div key={item} className="carrito-contenido">
      <tr>
        <td>{item.product.titulo}</td>
        <td>Cantidad: {item.quantity}</td>
        <td>Precio: ${item.product.precio}</td>
      </tr>
      {/*       <div className="">
        <div>{<img className="small" src={`/${item.product.img}`} />}</div>
        <div>
          <p>{item.product.titulo}</p>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio: ${item.product.precio}</p>
        </div>
      </div>
      <div className="">
        <button className="" onClick={() => removeFromCart(item.product.id, 1)}>
          -
        </button>
        <button className="" onClick={() => addToCart(item.product, 1)}>
          +
        </button>
      </div>
 */}{" "}
    </div>
  );
}
