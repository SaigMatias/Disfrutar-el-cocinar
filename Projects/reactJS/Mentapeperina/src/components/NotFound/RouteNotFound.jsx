import { Link } from "react-router-dom";

function RouteNotFound() {
  return (
    <>
      <Link
        to="/"
        className="uppercase text-slate-100 text-3xl text-center px-10 py-5 font-bold my-5 bg-sky-600 hover:bg-sky-800"
      >
        Volver al inicio
      </Link>
      <img
        src="/img/Error/404.webp"
        className="opacity-90"
        alt="error 404"
      />
    </>
  );
}

export default RouteNotFound;
