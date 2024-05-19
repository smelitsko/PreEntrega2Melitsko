import useProduct from "../../hooks/useProduct";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const { isLoading, product } = useProduct(itemId);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container">
      <ItemDetail item={product} />
    </div>
  );
}
export default ItemDetailContainer;
