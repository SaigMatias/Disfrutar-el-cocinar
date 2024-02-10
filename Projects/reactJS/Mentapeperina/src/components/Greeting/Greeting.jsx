import { useLocation } from "react-router-dom";

function Greeting({ greeting, contentIndex, url, alt }) {
  const local = useLocation().pathname;

  return (
    <>
      {local === "/" ? (
        <div className="flex items-center justify-center gap-x-3 py-10">
          <img className="w-28" src={url} alt={alt} />

          <h2 className="flex flex-col text-sans italic text-emerald-800 text-5xl mt-4">
            {greeting}
            <span className="text-4xl">{contentIndex}</span>
          </h2>
        </div>
      ) : (
        <div className="h-10" />
      )}
    </>
  );
}

export default Greeting;
