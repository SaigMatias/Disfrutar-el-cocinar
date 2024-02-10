import { useState } from "react";

const NavbarMenuCategory = ({ children, categoriesLoading }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className={`hover:bg-teal-600 text-stone-200 hover:text-stone-50 transition-all
        font-extrabold font-serif text-xl uppercase tracking-wider 
        w-1/5 flex items-center gap-x-2 justify-center ${
          categoriesLoading && "opacity-30"
        }`}
        onClick={toggleMenu}
      >
        <img
          src="/img/Navbar/menu-white.png"
          className="w-6 opacity-50"
        />
        <span>Categorias </span>
      </button>

      {isOpen && (
        <div
          className="absolute top-12 left-[20%] w-3/5 bg-teal-700 shadow-md shadow-teal-700 rounded-xl
        flex justify-around px-2"
        >
          {children}
          <button onClick={toggleMenu} className="w-36 ml-3">
            {" "}
            <img
              src="/img/Navbar/close-1.png"
              className="w-6 opacity-70 hover:opacity-100"
              alt="close"
            />
          </button>
        </div>
      )}
    </>
  );
};

export default NavbarMenuCategory;
