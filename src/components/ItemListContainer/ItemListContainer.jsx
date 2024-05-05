import useProducts from "../../hooks/useProducts";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();

  const { isLoading, products } = useProducts(categoryId);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {<h2>{greeting}</h2>}
      <ItemList products={products} />
    </div>
  );
}
export default ItemListContainer;
