import { useEffect, useState } from "react";

function useQuantity({ stock, price, quantityInCart }) {
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAdd = () => {
    quantity < stock - quantityInCart && setQuantity(quantity + 1);
  };

  const handleSubtract = () => {
    quantity >= 1 && setQuantity(quantity - 1);
  };

  useEffect(() => {
    setTotalPrice(quantity * price);
  }, [quantity, price]);

  return { totalPrice, quantity, setQuantity, handleAdd, handleSubtract };
}

export default useQuantity;
