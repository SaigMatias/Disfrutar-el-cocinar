import { useContext } from "react";
import useIsCartEmpty from "../../Hooks/useIsCartEmpty";
import { CartContext } from "../../context/CartContext";

function CheckoutSummary({ summary, totalCartPrice }) {
  const { cart} = useContext(CartContext);
  const {isCartEmpty} = useIsCartEmpty({cart, dep:cart})

  return (

    <div className="flex flex-col w-5/12 p-5 shadow-lg bg-[rgba(255,255,255,.9)] rounded-md">
    { !isCartEmpty ?
    (<>
      <h4 className="text-teal-700 font-bold uppercase text-2xl text-center mb-5 mt-1">
        Resumen de compra
      </h4>
      <h5 className="uppercase text-lg text-stone-700 font-bold">Productos </h5>
      <ul>
        {summary.map((e) => (
          <li key={Math.random()} className="border-b-2 border-stone-100">
            <p className="text-base text-stone-600">
              {e.title}
              <span className="text-sm text-stone-400 ml-1">
                ${e.price} c/u x {e.quantity} un.
              </span>
            </p>
            <p className="text-xs text-stone-500">{e.option}</p>
          </li>
        ))}
      </ul>

      <h5 className="uppercase text-2xl text-center font-bold mt-3 text-sky-900">
        Total
        <br /> ${totalCartPrice}
      </h5>
        </>) : (<h4 className="text-teal-700 font-bold uppercase text-2xl text-center mb-5 mt-1">
        Su pedido fue realizado con éxito
      </h4>)
        }
    </div>
  );
}

export default CheckoutSummary;
