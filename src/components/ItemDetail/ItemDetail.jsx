import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  return (
    <div className="">
      <p>{product.id}</p>
      <p>{product.category}</p>

      <p>${product.precio}</p>
    </div>
  );
};

export default ItemDetail;
