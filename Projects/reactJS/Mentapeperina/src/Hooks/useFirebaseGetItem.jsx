import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../Firebase/config";

function useFirebaseGetItem() {
  const [loading, setLoading] = useState(true);
  const [ctrl, setCtrl] = useState(false);
  const [item, setItem] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    // Control de id de documentos en firebase
    const ctrlRef = collection(db, "productsList");

    getDocs(ctrlRef).then((queryCtrl) => {
      const docsId = queryCtrl.docs.map((doc) => ({ id: doc.id }));
      if (!docsId.find((e) => e.id === itemId)) {
        setCtrl(true);
      }
    });

    // Llamado de documento del producto
    const docRef = doc(db, "productsList", itemId);

    getDoc(docRef)
      .then((docSnapshot) => {
        const doc = {
          ...docSnapshot.data(),
          id: docSnapshot.id,
        };
        setItem(doc);
      })
      .finally(() => setLoading(false));
  }, [itemId]);

  return { ctrl, item, loading };
}

export default useFirebaseGetItem;
