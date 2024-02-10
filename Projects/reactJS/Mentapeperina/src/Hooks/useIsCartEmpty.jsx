import { useEffect, useState } from "react";

function useIsCartEmpty({ cart, dep }) {
  const [isCartEmpty, setIsCartEmpty] = useState(false);

  useEffect(() => {
    if (cart.length === 0) {
      setIsCartEmpty(true);
    }
  }, [dep]);

  return { isCartEmpty };
}

export default useIsCartEmpty;
