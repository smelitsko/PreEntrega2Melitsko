import useCount from "../../hooks/useCount";
import ItemCount from "../ItemCount/ItemCount";
import { NavLink } from "react-router-dom";
import "./Item.css";

const Item = ({ item }) => {
  return (
    <div className="item__container">
      <img className="item--img" src={`/${item.img}`} />
      {/* <p className="">{item.titulo}</p> */}
      <p className="lista-precio">${item.precio}</p>
      <NavLink className="ver-mas" to={`/item/${item.id}`}>
        Ver más
      </NavLink>
    </div>
  );
};

export default Item;
