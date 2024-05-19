import { useContext } from "react";
import CartContext from "../../contexts/CartContext/CartContext";

import "./ItemDetail.css";
import useCount from "../../hooks/useCount";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const { count, increment, decrement, reset } = useCount(0);
  const { addToCart } = useContext(CartContext);
  const handleAddToCart = () => {
    addToCart(item, count);
    reset();
  };

  return (
    <div className="item__detail__container">
      <div className="item--img__container">
        <img className="item--img" src={`/${item.img}`} />
      </div>

      <div className="info__container">
        <p className="titulo">{item.titulo}</p>
        <p className="autor">{item.autor}</p>
        <p className="precio">${item.precio}</p>
        <p className="editorial">{item.editorial}</p>
        <div>
          <ItemCount
            stock={item.stock}
            count={count}
            increment={increment}
            decrement={decrement}
          />
        </div>
        <div>
          <button
            className="item--cart__button"
            onClick={handleAddToCart}
            disabled={count === 0}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
