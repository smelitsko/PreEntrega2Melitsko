import { useContext } from "react";
import CartContext from "../../contexts/CartContext/CartContext";
import CartItem from "../CartItem/CartItem";

export default function CartContainer() {
  const { cart, clearCart, cartTotal } = useContext(CartContext);

  return (
    <div className="">
      <h2 className="">Mi Carrito</h2>
      <div className="">
        <table>
          {cart.length === 0 ? (
            <h1>No hay productos en el carrito</h1>
          ) : (
            cart.map((item) => {
              return <CartItem key={item.product.id} item={item} />;
            })
          )}
        </table>
      </div>

      <h3 className="">Total: ${cartTotal}</h3>
      <button className="" onClick={clearCart}>
        Limpiar carrito
      </button>
    </div>
  );
}

{
  /* <table>
<tr>
    <th>Name</th>
    <th>Age</th>
    <th>Gender</th>
</tr>
{data.map((val, key) => {
    return (
        <tr key={key}>
            <td>{val.name}</td>
            <td>{val.age}</td>
            <td>{val.gender}</td>
        </tr>
    )
})}
</table> */
}
