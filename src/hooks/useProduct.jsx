import { useEffect, useState } from "react";
//import { getProductById } from "../mock/asyncMock";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export default function useProduct(idRef) {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   getProductById(id)
  //     .then((data) => setProduct(data))
  //     .finally(() => setIsLoading(false));
  // }, []);

  useEffect(() => {
    const db = getFirestore();

    const productRef = doc(db, "products", idRef);

    getDoc(productRef)
      .then((snapshot) => {
        setProduct({ id: snapshot.id, ...snapshot.data() });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { product, isLoading };
}
