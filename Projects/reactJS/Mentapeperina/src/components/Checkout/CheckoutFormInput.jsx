function CheckoutFormInput({ content, type, inputName, placeholder, values, fx }) {
  return (
    <>
      <label
        className="w-3/12 uppercase text-stone-600 font-bold text-base"
        htmlFor={inputName}
      >
        {content}
      </label>
      <input
        id={inputName}
        className="w-8/12 mb-3 pt-3 text-base text-stone-500 border-b-2 border-sky-100 focus:outline-none focus:bg-gradient-to-l focus:from-sky-50 focus:to-transparent"
        type={type}
        placeholder={placeholder}
        name={inputName}
        value={values}
        onChange={fx}
        required
      />
    </>
  );
}

export default CheckoutFormInput;
