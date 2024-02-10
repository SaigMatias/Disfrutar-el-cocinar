import Loading from "../Loading/Loading";
import ItemDetail from "./ItemDetail";
import ProductNotFound from "../NotFound/ProductNotFound";
import useFirebaseGetItem from "../../Hooks/useFirebaseGetItem";

function ItemDetailContainer() {
  const { ctrl, item, loading } = useFirebaseGetItem();

  return (
    <>
      {ctrl ? (
        <ProductNotFound />
      ) : loading ? (
        <Loading />
      ) : (
        <ItemDetail item={item} />
      )}
    </>
  );
}

export default ItemDetailContainer;
