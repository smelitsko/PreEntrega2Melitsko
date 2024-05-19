import { useContext } from "react";
import CartContext from "../../contexts/CartContext/CartContext";

export default function CartItem({ item }) {
  const { removeFromCart, addToCart } = useContext(CartContext);
  <tr>
    <td></td>
    <td>{item.product.titulo}</td>
  </tr>;

  return <div key={item} className=""></div>;
}
