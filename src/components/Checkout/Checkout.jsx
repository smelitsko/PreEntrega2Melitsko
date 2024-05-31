import { useContext } from "react";
import CartContext from "../../contexts/CartContext/CartContext";
import { collection, getFirestore, addDoc, doc } from "firebase/firestore";
import useBuyer from "../../hooks/useBuyer";
import CartDetails from "../CartDetails/CartDetails";

export default function Checkout() {
  const { cart, clearCart, cartTotal } = useContext(CartContext);
  const { buyer, handleInputChange } = useBuyer();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const order = {
      buyer,
      cart,
      cartTotal,
    };

    const db = getFirestore();

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then(({ id }) => {
      alert(`Compra realizada con éxito, tu número de orden es: ${id}`);
      clearCart();
    });
  };

  return (
    <div className="">
      <h2 className="">Checkout</h2>

      <form onSubmit={handleSubmit}>
        <label> Nombre </label>
        <input
          type="text"
          placeholder="Nombre del comprador"
          name="name"
          value={buyer.name}
          onChange={handleInputChange}
        />
        <br />
        <label> Telephone </label>
        <input
          type="text"
          placeholder="Telefono del comprador"
          name="telephone"
          value={buyer.telephone}
          onChange={handleInputChange}
        />
        <br />
        <label> Email </label>
        <input
          type="email"
          placeholder="Email del comprador"
          name="email"
          value={buyer.email}
          onChange={handleInputChange}
        />

        <br />
        <CartDetails cart={cart} cartTotal={cartTotal} />
        <button type="submit">Comprar</button>
      </form>
    </div>
  );
}
