import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <>
      <div className="z-50 w-screen h-screen bg-[rgba(25,25,25,0.9)] fixed flex justify-center items-center">
        <div className="bg-slate-700 p-10 h-1/3 shadow-lg shadow-slate-600 rounded-xl flex flex-col justify-center items-center gap-10">
          <p className="leading-normal uppercase text-3xl text-center text-stone-100 font-bold tracking-wider">
            Tu carrito está vacío
            <br /> ¿Quieres agregar algún producto?
          </p>

          <Link
            to="/"
            className="bg-teal-600 hover:bg-sky-600 text-stone-100 hover:text-zinc-100 p-5 rounded-full text-xl uppercase font-bold shadow-md shadow-slate-800"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </>
  );
}

export default EmptyCart;
