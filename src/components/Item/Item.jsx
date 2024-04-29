import useCount from "../../hooks/useCount";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";


const Item = ({ item }) => {
  const { count, increment, decrement } = useCount(0);

  const onAdd = (nombreDeItem, cantidadaLlevar) => {
    console.log("nombreDeItem: ", nombreDeItem);
    console.log("cantidadaLlevar: ", cantidadaLlevar);
  };

  console.log({ count, item });

  return (
    <div className = "item__container">
      {/* <h3>{item.titulo}</h3> */}
 
      <div className = "item--img__container">
      <img className = "item--img" src={  item.img} />

      </div>
      <p>${item.precio}</p>
      <div >
        <ItemCount
          stock={item.stock}
          count={count}
          increment={increment}
          decrement={decrement}
        />
      </div>

      <div>
        <button className = "item--cart__button"
          onClick={() => onAdd(item, count)}
        >
          Agregar
        </button>
      </div>

    </div>
  );
};

export default Item;
