import useFirebaseOrders from "../../Hooks/useFirebaseOrders";
import OrderFoundSummary from "./OrderFoundSummary";

function OrderFound({ orderId }) {
  const { loading, ctrl, item } = useFirebaseOrders(orderId);

  return (
    <div className="flex flex-col w-1/2 p-5 mt-6 shadow-lg bg-[rgba(255,255,255,.9)] rounded-md">
      {ctrl ? (
        <p className="text-center text-2xl text-stone-600">
          Este Id no corresponde a ninguna orden
        </p>
      ) : loading ? (
        <p className="text-teal-700 m-3 text-center font-bold text-2xl uppercase italic animate-bounce">
          cargando datos
        </p>
      ) : (
        <OrderFoundSummary item={item} />
      )}
    </div>
  );
}

export default OrderFound;
