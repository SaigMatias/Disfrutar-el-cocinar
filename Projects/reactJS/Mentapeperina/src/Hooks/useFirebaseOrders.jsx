import { useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../Firebase/config";

function useFirebaseOrders({ orderId }) {
  const [loading, setLoading] = useState(true);
  const [ctrl, setCtrl] = useState(false);
  const [item, setItem] = useState(null);

  useEffect(() => {
    setLoading(true);

    // Control de id de documentos en firebase
    const ctrlRef = collection(db, "orders");

    getDocs(ctrlRef).then((queryCtrl) => {
      const docsId = queryCtrl.docs.map((doc) => ({ id: doc.id }));
      if (!docsId.find((e) => e.id === orderId)) {
        setCtrl(true);
      } else {
        setCtrl(false);
      }
    });

    // Llamado de documento del producto
    const docRef = doc(db, "orders", orderId);

    getDoc(docRef)
      .then((docSnapshot) => {
        const doc = {
          ...docSnapshot.data(),
          id: docSnapshot.id,
        };
        setItem(doc);
      })
      .finally(() => setLoading(false));
  }, [orderId]);

  return { ctrl, item, loading };
}

export default useFirebaseOrders;
