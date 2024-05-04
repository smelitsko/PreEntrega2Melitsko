import useProduct from "../../hooks/useProduct";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const { isLoading, product } = useProduct(Number(itemId));

  if (isLoading) return <div>Loading...</div>;

  //  console.log({ isLoading, product });

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
}
export default ItemDetailContainer;
