import { Product } from '@cencosud-ds/easy-design-system';
import { LayoutOptions } from '@components/molecules/Display/types';
import { OrderOptions } from '@components/molecules/Filter/types';
import { Facets } from '@entities/product/facets.entity';
import { SearchByCategoriesResponse } from '@entities/product/repository/product-repository.types';
import { createSlice } from '@reduxjs/toolkit';

type ProductSliceState = {
  products: Product[];
  facets: Facets[];
  recordsFiltered: number;
  count: number;
  page: number;
  sort?: OrderOptions;
  layout: LayoutOptions;
  filter?: string;
};

const initialState: ProductSliceState = {
  products: [],
  facets: [],
  count: 10,
  page: 1,
  recordsFiltered: 0,
  sort: 'orders:desc',
  layout: 'grid',
};

const productSlice = createSlice({
  name: 'products-plp',
  initialState,
  reducers: {
    setSearchState: (
      state,
      { payload }: { payload: SearchByCategoriesResponse },
    ) => {
      state.facets = payload.facets;
      state.products = payload.productList;
      state.recordsFiltered = payload.recordsFiltered;
    },
    setSort: (state, { payload }: { payload: OrderOptions }) => {
      state.sort = payload;
    },
    setLayout: (state, { payload }: { payload: LayoutOptions }) => {
      state.layout = payload;
    },
  },
});

export const { setSearchState, setLayout, setSort } = productSlice.actions;
export default productSlice;
