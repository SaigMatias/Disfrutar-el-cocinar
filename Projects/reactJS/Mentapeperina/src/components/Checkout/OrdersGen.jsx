function OrdersGen({ checkout }) {
  return (
    <>
      <div className="flex flex-col items-center">
        <h4 className="text-sky-700 font-bold uppercase text-2xl text-center mb-8 mt-1">
          Orden {checkout.orderState}
        </h4>
        <div>
          <p>
            <span className="font-bold mr-2">Id</span>
            {checkout.orderId}
          </p>
          <p>
            <span className="font-bold mr-2">Fecha</span>
            {checkout.date}
          </p>
        </div>
      </div>
    </>
  );
}

export default OrdersGen;
