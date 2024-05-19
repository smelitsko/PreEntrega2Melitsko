import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ item }) => {
  return (
    <div className="item__container">
      <img className="item--img" src={`/${item.img}`} />

      <p className="lista-precio">${item.precio}</p>
      <Link className="ver-mas" to={`/item/${item.id}`}>
        Ver más
      </Link>
    </div>
  );
};

export default Item;
