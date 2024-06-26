import { useContext } from "react";
import CartContext from "../../contexts/CartContext/CartContext";
import {
  collection,
  getFirestore,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import useBuyer from "../../hooks/useBuyer";
import CartDetails from "../CartDetails/CartDetails";
import "./Checkout.css";

export default function Checkout() {
  const { cart, clearCart, cartTotal } = useContext(CartContext);
  const { buyer, handleInputChange } = useBuyer();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const order = {
      buyer,
      cart,
      cartTotal,
      date: serverTimestamp(),
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

      <form className="order-form" onSubmit={handleSubmit}>
        <label> Nombre </label>
        <input
          type="text"
          placeholder="nombre del comprador"
          name="name"
          value={buyer.name}
          onChange={handleInputChange}
        />
        <br />
        <label> Telephone </label>
        <input
          type="text"
          placeholder="telefono del comprador"
          name="telephone"
          value={buyer.telephone}
          onChange={handleInputChange}
        />
        <br />
        <label> Email </label>
        <input
          type="email"
          placeholder="email del comprador"
          name="email"
          value={buyer.email}
          onChange={handleInputChange}
        />

        <br />
        <CartDetails cart={cart} cartTotal={cartTotal} />
        <div className="container">
          <button className="checkout" type="submit">
            Comprar
          </button>
        </div>
      </form>
    </div>
  );
}
