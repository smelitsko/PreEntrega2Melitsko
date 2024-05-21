import { useContext } from "react";
import CartContext from "../../contexts/CartContext/CartContext";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { useState } from "react";

export default function Checkout() {
  const { cart, clearCart, cartTotal } = useContext(CartContext);
  const [idOrderSaved, setIdOrderSaved] = useState("");
  const [buyer, setBuyer] = useState({
    name: "",
    lastName: "",
    email: "",
  });

  const handleInputChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      buyer,
      cart,
      cartTotal,
    };

    const db = getFirestore();

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then(({ id }) => setIdOrderSaved);
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
        <label> Apellido </label>
        <input
          type="text"
          placeholder="Apellido del comprador"
          name="lastName"
          value={buyer.lastName}
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
        <button type="submit">Comprar</button>
      </form>
    </div>
  );
}
