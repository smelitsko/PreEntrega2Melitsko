import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartProvider from "./contexts/CartContext/CartProvider";
import CartContainer from "./components/CartContainer/CartContainer";
import Checkout from "./components/Checkout/Checkout";

import { getFirestore, collection, getDocs } from "firebase/firestore";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer greeting={"Bienvenidos a LiberArt"} />
              }
            />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="*" element={<h1>Not found</h1>} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          {/* <CartContext.Provider value={CART_INITIAL_STATE}></CartContext.Provider> */}
        </Layout>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
