function OrderFoundSummary({ item }) {
  return (
    <>
      <h4 className="text-teal-700 font-bold uppercase text-2xl text-center mt-1 mb-1">
        Orden de compra id
      </h4>
      <p className="text-stone-600 font-bold text-2xl text-center mb-5 border-b-2 pb-2 border-slate-100">
        {item.id}
      </p>

      <h5 className="uppercase text-lg text-stone-700 font-bold">Productos </h5>
      <ul className="my-3 flex flex-col gap-2 text-stone-600  border-b-2 pb-2 border-slate-100">
        {item.checkout.products.map((e) => (
          <li key={Math.random()}>
            <p className="font-semibold">{e.title}</p>
            <p>{e.option}</p>
            <p>
              {e.quantity} x ${e.price} = ${e.totalPrice}
            </p>
          </li>
        ))}
      </ul>
      <h5 className="uppercase text-lg text-stone-700 font-bold">
        Total de la compra
      </h5>

      <p className="text-stone-600 text-lg font-bold">
        ${item.checkout.totalCart}
      </p>
      <p className="text-stone-500 text-right mt-3">
        Orden {item.checkout.orderState} el {item.checkout.date}
      </p>
    </>
  );
}

export default OrderFoundSummary;
