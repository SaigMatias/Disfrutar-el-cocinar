import NavigateGoBack from "../NavigateGoBack/NavigateGoBack";
import ItemQuantitySelector from "./ItemQuantitySelector";

function ItemDetail({ item }) {
  return (
    <div className="w-3/4 py-3 flex flex-col items-center gap-5">
      <NavigateGoBack />
      <h3 className="text-5xl text-center font-bold font-serif text-teal-800 py-1 w-full border-solid border-b-2 border-slate-200">
        {item.title}
      </h3>
      <h4 className="text-right w-full uppercase text-xl text-zinc-400 font-serif italic tracking-wider">
        {item.category}
      </h4>
      <div className="flex gap-5 justify-center w-4/5 items-center">
        <img
          className="object-contain h-64 border-solid border-4 border-slate-300"
          src={item.img}
          alt={item.title}
        />

        <p className="text-lg">{item.description}</p>
      </div>

      <p className="text-3xl mt-5 mb-3 pt-7 font-bold text-emerald-700 border-solid border-t-2 border-slate-200 w-full text-center">
        Precio: ${item.price}
      </p>

      <ItemQuantitySelector item={item} />
    </div>
  );
}

export default ItemDetail;
