function Loading() {
  return (
    <>
      <div className="container flex justify-center items-center border-solid border-y-2 border-stone-200  py-2">
        <img
          src="/img/Loading/loading.png"
          alt="loading"
          className="animate-bounce h-14"
        />
        <p className="animate-pulse font-bold text-4xl text-stone-400 font-serif italic">
          Cargando lista...
        </p>
      </div>
    </>
  );
}

export default Loading;
