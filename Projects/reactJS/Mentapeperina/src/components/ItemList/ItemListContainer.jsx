import ItemList from "./ItemList.jsx";
import Loading from "../Loading/Loading.jsx";
import useFirebaseFilterProducts from "../../Hooks/useFirebaseFilterProducts.jsx";
import NavigateGoBack from "../NavigateGoBack/NavigateGoBack.jsx";

function ItemListContainer() {
  const { categoryId, loading, productsList } = useFirebaseFilterProducts();

  return (
    <>
      <NavigateGoBack classAdd="ml-10" />
      <h2 className="text-4xl uppercase w-full text-center text-stone-400 mb-3 mt-5 tracking-wide">
        {categoryId}
      </h2>
      {loading ? (
        <Loading />
      ) : (
        <ul className="flex flex-wrap w-full gap-10 place-content-center">
          <ItemList items={productsList} />
        </ul>
      )}
    </>
  );
}

export default ItemListContainer;
