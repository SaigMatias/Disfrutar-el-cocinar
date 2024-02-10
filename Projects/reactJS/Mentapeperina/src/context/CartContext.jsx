import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar en función del id y el option, con control de duplicados
  const addToCart = (
    currentItem,
    currentItemId,
    currentItemQuantity,
    currentItemOption
  ) => {
    setCart(() => {
      const isItemsFound = cart.find(
        (cartItem) =>
          cartItem.id === currentItemId && cartItem.option === currentItemOption
      );
      if (isItemsFound) {
        return cart.map((cartItem) => {
          if (
            cartItem.id === currentItemId &&
            cartItem.option === currentItemOption
          ) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + currentItemQuantity,
              option: currentItemOption,
            };
          } else {
            return cartItem;
          }
        });
      } else {
        return [...cart, currentItem];
      }
    });
  };

  // Eliminación de items seleccionados en cart
  const removeItem = (currentItem) => {
    const itemFound = cart.find(
      (cartItem) =>
        (cartItem.id && cartItem.option) ===
        (currentItem.id && currentItem.option)
    );
    if (itemFound) {
      setCart(cart.filter((item) => item !== currentItem));
    }
  };

  // Busqueda y filtrado del item actual en cart
  const isInCart = (id) => cart.filter((item) => item.id === id);

  // Calcular cantidad total
  const totalQuantity = (elem) =>
    elem.reduce((acc, item) => acc + item.quantity, 0);
  const totalQuantityInCart = totalQuantity(cart);
  const totalCartPrice = cart.reduce((acc, item) => acc + item.totalPrice, 0);

  // vacias cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isInCart,
        addToCart,
        clearCart,
        removeItem,
        totalCartPrice,
        totalQuantity,
        totalQuantityInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
