import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Firebase/config";
import { useContext, useState } from "react";
import CheckoutFormInput from "./CheckoutFormInput";
import { CartContext } from "../../context/CartContext";
import OrdersGen from "./OrdersGen";
import toast, { Toaster } from "react-hot-toast";
import { Toast } from "../Toast/Toast";
import { notifyError } from "../Toast/Notify";

function CheckoutForm({ summary, totalCartPrice }) {
  const { clearCart } = useContext(CartContext);
  const [genOrder, SetGenOrder] = useState(false);
  const [loading, setLoading] = useState(false);

  const [orderId, setOrderId] = useState(null);
  const date = new Date();
  const orderDate = date.toLocaleString();
  const orderState = "generada";

  const checkout = {
    orderId,
    date: orderDate,
    products: summary,
    totalCart: totalCartPrice,
    orderState,
  };

  // input values
  const [values, setValues] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    emailConfirm: "",
  });

  // input fx
  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.email !== values.emailConfirm) {
      notifyError("El email no coincide");
      return;
    } else {
      setLoading(true);

      const order = {
        cliente: values,
        checkout,
      };

      // agregado de orden a Firebase
      const ordersRef = collection(db, "orders");

      addDoc(ordersRef, order).then((doc) => {
        setOrderId(doc.id);
        setLoading(false);
        clearCart();
        SetGenOrder(true);
      });
    }
  };

  return (
    <>
      <Toast />

      <div
        className={`${
          loading && "grayscale"
        } flex flex-col w-5/12 p-5 shadow-lg bg-[rgba(255,255,255,.9)] rounded-md`}
      >
        {!genOrder ? (
          <>
            <h4 className="text-sky-700 font-bold uppercase text-2xl text-center mb-8 mt-1">
              Finalizar compra
            </h4>

            <form
              className="flex flex-wrap gap-2 justify-center items-center"
              onSubmit={handleSubmit}
            >
              <CheckoutFormInput
                content="nombre"
                type="text"
                inputName="nombre"
                placeholder="Jonh"
                values={values.nombre}
                fx={handleInputChange}
              />
              <CheckoutFormInput
                content="apellido"
                type="text"
                inputName="apellido"
                placeholder="Due"
                values={values.apellido}
                fx={handleInputChange}
              />
              <CheckoutFormInput
                content="telefono"
                type="tel"
                inputName="telefono"
                placeholder="123456789"
                values={values.telefono}
                fx={handleInputChange}
              />
              <CheckoutFormInput
                content="email"
                type="email"
                inputName="email"
                placeholder="nombre@email.com"
                value={values.email}
                fx={handleInputChange}
              />
              <CheckoutFormInput
                content="Repite el email"
                type="email"
                inputName="emailConfirm"
                placeholder="confirmar email"
                value={values.emailConfirm}
                fx={handleInputChange}
              />

              <button
                type="submit"
                className={` ${
                  loading && "animate-pulse grayscale-0"
                } uppercase w-2/5 rounded-full py-2 mt-5 bg-sky-600 hover:bg-sky-900 text-stone-50 font-bold text-center shadow-md shadow-slate-400 tracking-wider`}
              >
                Comprar
              </button>
            </form>
          </>
        ) : (
          <OrdersGen checkout={checkout} />
        )}
      </div>
    </>
  );
}

export default CheckoutForm;
