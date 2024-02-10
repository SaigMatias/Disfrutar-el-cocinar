import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Greeting from "./components/Greeting/Greeting.jsx";
import ItemListContainer from "./components/ItemList/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer.jsx";
import CartView from "./components/CartView/CartView.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import RouteNotFound from "./components/NotFound/RouteNotFound.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";
import OrdersFinder from "./components/OrdersFinder/OrdersFinder.jsx";

function App() {
  return (
    <section className="w-full min-h-screen pb-5 bg-green-50  m-0 flex flex-col items-center">
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Navbar />

          <Greeting
            greeting="Hola!!!"
            contentIndex="estos son nuestro productos"
            url="/img/Greeting/greeting_Image.png"
            alt="Greeting"
          />

          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartView />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<OrdersFinder />} />
            <Route path="/not-found" element={<RouteNotFound />} />
            <Route path="*" element={<Navigate to={"/not-found"} />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </section>
  );
}

export default App;
