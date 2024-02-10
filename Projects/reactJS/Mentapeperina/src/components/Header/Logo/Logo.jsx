import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <>
      <NavLink
        to="/"
        className="bg-gradient-to-b from-emerald-900 to-green-950 flex justify-center py-4"
      >
        <img src="/img/Logo/logo-izq.png" alt="logo-izq" />

        <h1 className="font-sans uppercase font-bold text-stone-100 text-center text-4xl tracking-wider">
          Menta peperina
          <span className="block text-3xl text-stone-400 opacity-50">Vivero urbano</span>
        </h1>

        <img src="/img/Logo/logo-dre.png" alt="logo-dre" />
      </NavLink>
    </>
  );
}

export default Logo;
