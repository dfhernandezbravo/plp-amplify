import { createSlice } from '@reduxjs/toolkit';

type ShoppingCartState = {
  cartId: string;
};

const initialState: ShoppingCartState = {
  cartId: '',
};

const shoppingCartSlice = createSlice({
  name: 'plp:shopping-cart',
  initialState,
  reducers: {
    setCartId: (state, { payload }: { payload: string }) => {
      state.cartId = payload;
    },
  },
});

export const { setCartId } = shoppingCartSlice.actions;
export default shoppingCartSlice;
