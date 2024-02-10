import { Link } from "react-router-dom";

function ItemList({ items }) {
  return (
    <>
      {items.map((elem) => (
        <li
          className=" bg-white shadow-sm shadow-stone-300
        flex flex-col items-center justify-beetween
        w-1/4 py-3 rounded-lg"
          key={elem.id}
        >
          <img
            className="object-cover h-56 w-11/12"
            src={elem.img}
            alt={elem.title}
          />

          <h4 className="w-11/12 font-bold h-16 my-2 text-2xl text-center text-neutral-800">
            {elem.title}
          </h4>

          <Link
            className="w-1/2 mb-3 rounded-full py-3 bg-sky-600 hover:bg-sky-900 text-stone-50
            uppercase font-extrabold text-lg text-center "
            to={`/item/${elem.id}`}
          >
            Detalles
          </Link>
        </li>
      ))}
    </>
  );
}

export default ItemList;
