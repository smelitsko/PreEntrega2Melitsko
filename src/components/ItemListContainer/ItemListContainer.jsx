import useProducts from "../../hooks/useProducts";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();

  const { isLoading, products } = useProducts(categoryId);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {<h1>{greeting}</h1>}
      <ItemList products={products} />
    </div>
  );
}
export default ItemListContainer;
