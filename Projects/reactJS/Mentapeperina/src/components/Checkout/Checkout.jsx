import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CheckoutForm from "./CheckoutForm";
import CheckoutSummary from "./CheckoutSummary";
import useIsCartEmpty from "../../Hooks/useIsCartEmpty";
import EmptyCart from "../CartView/EmptyCart";

function Checkout() {
  const { cart, totalCartPrice } = useContext(CartContext);

  // reducción de propiedades en cart para enviar a firebase
  const summary = cart.map((e) => ({
    id: e.id,
    option: e.option,
    price: e.price,
    totalPrice: e.totalPrice,
    quantity: e.quantity,
    title: e.title,
  }));

  // Control de carrito vacio
  const { isCartEmpty } = useIsCartEmpty({ cart });

  return (
    <>
      {isCartEmpty && <EmptyCart />}
      <article className="w-full flex justify-center gap-10">
        <CheckoutSummary summary={summary} totalCartPrice={totalCartPrice} />
        <CheckoutForm summary={summary} totalCartPrice={totalCartPrice} />
      </article>
    </>
  );
}

export default Checkout;
