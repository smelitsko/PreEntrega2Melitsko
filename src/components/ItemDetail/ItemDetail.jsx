import "./ItemDetail.css";
import useCount from "../../hooks/useCount";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const { count, increment, decrement } = useCount(0);

  const onAdd = (nombreDeItem, cantidadaLlevar) => {
    console.log("nombreDeItem: ", nombreDeItem);
    console.log("cantidadaLlevar: ", cantidadaLlevar);
  };

  // console.log({ count, item });

  return (
    <div className="item__detail__container">
      <div className="item--img__container">
        <img className="item--img" src={item.img} />
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
            onClick={() => onAdd(item, count)}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
