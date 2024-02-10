import { useState } from "react";
import OrderFound from "./OrderFound";

function OrdersFinder() {
  const [orderId, setOrderId] = useState(null);
  const [orderIdValue, setOrderIdValue] = useState("");

  const handleInputChange = (e) => {
    setOrderIdValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderId(orderIdValue);
  };

  console.log(orderId);
  return (
    <>
      <form
        className="flex flex-wrap gap-5 w-11/12 justify-center"
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="orderId"
          className="w-full text-center text-stone-500 uppercase text-3xl font-bold"
        >
          Escribe el
          <span className="text-stone-600"> &ldquo;Id de orden&rdquo; </span>de
          tu compra
        </label>
        <input
          className="w-3/5 border-2 border-slate-500 shadow-md shadow-slate-300 focus:outline-none rounded px-2 text-stone-900"
          placeholder="Id de orden de compra"
          type="text"
          value={orderIdValue}
          name="orderId"
          id="orderId"
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className={`text-lg uppercase w-1/5 rounded-full p-2  bg-sky-600 hover:bg-sky-900 text-stone-50 font-bold text-center shadow-md shadow-slate-400 tracking-wider`}
        >
          Consultar
        </button>
      </form>

      {orderId !== null ? <OrderFound orderId={{ orderId }} /> : null}
    </>
  );
}

export default OrdersFinder;
