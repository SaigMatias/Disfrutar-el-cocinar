import { NavLink, useLocation } from "react-router-dom";

function NavbarItem({ content, href, w }) {
  const local = useLocation().pathname;

  return (
    <>
      <NavLink
        to={href}
        className={`hover:bg-teal-600 text-stone-200 hover:text-stone-50 transition-all
        font-extrabold font-serif text-xl uppercase tracking-wider text-center
        my-2 ${w}
        ${local === href ? " text-zinc-100 bg-teal-800" : null}
        `}
      >
        {content}
      </NavLink>
    </>
  );
}

export default NavbarItem;
