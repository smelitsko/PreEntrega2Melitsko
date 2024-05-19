import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export default function useProducts(categoryRef) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, "products");
    const q = categoryRef
      ? query(productsCollection, where("category", "==", categoryRef))
      : productsCollection;

    getDocs(q)
      .then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [categoryRef]);

  return { products, isLoading };
}
