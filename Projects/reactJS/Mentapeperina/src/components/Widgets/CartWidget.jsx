import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const { totalQuantityInCart } = useContext(CartContext);
  return (
    <>
      <Link
        to="/cart"
        className={`transition-all w-1/12 rounded-2xl text-xl font-semibold flex justify-center items-center gap-x-3 
          ${
            totalQuantityInCart > 0
              ? "bg-teal-600 text-zinc-100 hover:text-zinc-50 hover:bg-sky-500"
              : "text-stone-200 bg-teal-700"
          }
          `}
      >
        <img
          className="h-6"
          src="/img/Widgets/bag.png"
          alt="Shopping Bag"
        ></img>
        <p className="mt-1"> {totalQuantityInCart} </p>
      </Link>
    </>
  );
}

export default CartWidget;
