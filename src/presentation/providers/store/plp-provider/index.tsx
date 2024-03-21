import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { useAppDispatch } from '@store/hooks';
import { setCount } from '@store/slices/products';
import { plpStore } from '@store/provider/store';

interface Props {
  children: React.ReactNode;
}

const PlpProvider = ({ children }: Props) => {
  const dispatch = useAppDispatch();

  const getCountProducts = async () => {
    const maxCountProducts =
      process.env.NEXT_PUBLIC_MAX_COUNT_PRODUCTS_PLP || '10';
    if (maxCountProducts) {
      dispatch(setCount(parseInt(maxCountProducts)));
    }
  };

  useEffect(() => {
    getCountProducts();
  }, []);

  return <Provider store={plpStore}>{children}</Provider>;
};

export default PlpProvider;
