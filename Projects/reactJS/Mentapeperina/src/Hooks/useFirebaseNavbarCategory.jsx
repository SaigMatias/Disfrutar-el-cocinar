import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/config";

function useFirebaseNavbarCategory() {
  const [categories, setCategories] = useState([]);
  const [categoriesLoading, setCategoriesLoading] = useState(false);

  useEffect(() => {
    setCategoriesLoading(true);
    const categoriesRef = collection(db, "categories");

    getDocs(categoriesRef)
      .then((querySnapshot) => {
        const docs = querySnapshot.docs.map((doc) => {
          return {
            ...doc.data(),
          };
        });

        setCategories(docs);
      })
      .finally(() => setCategoriesLoading(false));
  }, []);

  return { categories, categoriesLoading };
}

export default useFirebaseNavbarCategory;
