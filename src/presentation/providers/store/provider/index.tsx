import React from 'react';
import { Provider } from 'react-redux';
import { plpStore } from './store';

interface Props {
  children: React.ReactNode;
}

const StoreProvider = ({ children }: Props) => {
  return <Provider store={plpStore}>{children}</Provider>;
};

export default StoreProvider;
