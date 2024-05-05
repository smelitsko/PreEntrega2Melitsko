import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../mock/asyncMock";

export default function useProducts(category) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (category) {
      getProductsByCategory(category)
        .then((data) => setProducts(data))
        .finally(() => setIsLoading(false));
    } else {
      getProducts()
        .then((data) => setProducts(data))
        .finally(() => setIsLoading(false));
    }
  }, [category]);

  return { products, isLoading };
}
