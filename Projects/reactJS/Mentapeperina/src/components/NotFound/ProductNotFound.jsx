import { Link } from "react-router-dom";

function ProductNotFound() {
  return (
    <>
      <img
        src="/img/Error/404.webp"
        className="hue-rotate-180 opacity-80 w-1/3 rounded-3xl"
        alt="not product"
      />
      <p className="text-3xl my-5 text-stone-600">
        Lo sentimos, esto no es parte de nuestros productos
      </p>

      <Link
        to="/"
        className="uppercase rounded-full text-slate-100 text-2xl text-center px-10 py-5 font-bold my-5 bg-emerald-600 hover:bg-teal-900"
      >
        Volver al catalogo
      </Link>
    </>
  );
}

export default ProductNotFound;
