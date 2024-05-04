import { useEffect, useState } from "react";
import { getProductsByCategory } from "../mock/asyncMock";

export default function useProductsByCategory(category) {
  const [productsByCategory, setProductsByCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProductsByCategory(category)
      .then((data) => setProductsByCategory(data))
      .finally(() => setIsLoading(false));
  }, []);

  return { productsByCategory, isLoading };
}
