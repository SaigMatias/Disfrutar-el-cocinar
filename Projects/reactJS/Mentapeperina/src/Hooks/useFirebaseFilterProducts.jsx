import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../Firebase/config";

function useFirebaseFilterProducts() {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productsListRef = collection(db, "productsList");

    const docsRef = categoryId
      ? query(productsListRef, where("category", "==", categoryId))
      : productsListRef;

    getDocs(docsRef)
      .then((querySnapshot) => {
        const docs = querySnapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        });

        setProductsList(docs);
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  return { categoryId, loading, productsList };
}

export default useFirebaseFilterProducts;
