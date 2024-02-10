import { Link } from "react-router-dom";

function CartViewButtons({ removeFx }) {
  return (
    <div className="z-20 flex  justify-evenly items-center bg-[rgba(178,228,178,0.7)] backdrop-blur-sm w-screen fixed bottom-0 py-2 border-t-2 border-white">
      <button
        className="border-2 border-red-400 bg-red-300 hover:bg-red-800 font-bold text-zinc-50 w-1/6 py-3 uppercase rounded-lg"
        onClick={removeFx}
      >
        <figure className=" flex justify-center items-center  gap-1">
          <img
            className="w-[24px] opacity-80"
            src="/img/Widgets/trash2-white.png"
            alt="trash"
          />
          <span>Eliminar todo</span>
        </figure>
      </button>

      <Link
        to="/checkout"
        className="uppercase w-1/4 rounded-full py-3 bg-sky-700 hover:bg-sky-900 text-zinc-50 font-extrabold text-lg text-center 
        tracking-wider
        border-2 border-sky-800 hover:border-sky-600 hover:text-white"
      >
        Finalizar compra
      </Link>
    </div>
  );
}

export default CartViewButtons;
