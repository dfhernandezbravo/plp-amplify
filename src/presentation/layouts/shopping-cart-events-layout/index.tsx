import React, { useEffect } from 'react';
import { SHOPPING_CART_EVENTS } from 'src/application/infra/events/shopping-cart';

interface Props {
  children: React.ReactNode;
  refreshProducts: () => void;
}

const ShoppingCartEventLayout: React.FC<Props> = ({
  children,
  refreshProducts,
}) => {
  useEffect(() => {
    document.addEventListener(
      SHOPPING_CART_EVENTS.UPDATE_SHIPPING_CART,
      (event) => {
        event.preventDefault();
        refreshProducts();
      },
    );
    return () => {
      document.removeEventListener(
        SHOPPING_CART_EVENTS.UPDATE_SHIPPING_CART,
        (event) => {
          event.preventDefault();
          refreshProducts();
        },
      );
    };
  }, []);

  return <>{children}</>;
};

export default ShoppingCartEventLayout;
