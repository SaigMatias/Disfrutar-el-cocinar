import NavbarItem from "./NavbarItem";
import CartWidget from "../Widgets/CartWidget";

import NavbarMenuCategory from "./NavbarMenuCategory";
import useFirebaseNavbarCategory from "../../Hooks/useFirebaseNavbarCategory";

function Navbar() {
  const { categories, categoriesLoading } = useFirebaseNavbarCategory();

  return (
    <nav className="z-50 flex justify-center items-center w-full bg-teal-900 shadow-lg shadow-slate-300 px-3 sticky top-0 gap-1">
      <NavbarItem content="Inicio" href="/" w="w-1/5" />
      <NavbarItem content="Mis ordenes" href="/orders" w="w-1/5" />

      <NavbarMenuCategory categoriesLoading={categoriesLoading}>
        {categories.map((e) => (
          <NavbarItem
            key={e.category}
            content={e.category}
            href={e.link}
            w="w-full"
          />
        ))}
      </NavbarMenuCategory>

      <NavbarItem
        content="Mis Compras"
        href="/cart"
        w="m-1/5 ml-20 mr-5 text-zinc-100"
      />
      <CartWidget />
    </nav>
  );
}

export default Navbar;
