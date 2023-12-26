import { Product } from '@cencosud-ds/easy-design-system';
import { LayoutOptions } from '@components/molecules/Display/types';
import { OrderOptions } from '@components/molecules/Filter/types';
import { Facets } from '@entities/product/facets.entity';
import { SearchByCategoriesResponse } from '@entities/product/repository/product-repository.types';
import { createSlice } from '@reduxjs/toolkit';

type ProductTmp = Product &
  Partial<{
    linkText: string;
  }>;

type ProductSliceState = {
  products: ProductTmp[];
  facets: Facets[];
  recordsFiltered: number;
  count: number;
  page: number;
  sort?: OrderOptions;
  layout: LayoutOptions;
  filter?: string;
  isOpenFacetsMobile: boolean;
  isOpenOrderMobile: boolean;
};

const initialState: ProductSliceState = {
  products: [],
  facets: [],
  count: 10,
  page: 1,
  recordsFiltered: 0,
  sort: 'orders:desc',
  layout: 'grid',
  isOpenFacetsMobile: false,
  isOpenOrderMobile: false,
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
    setOpenFacetsMobile: (state, { payload }: { payload: boolean }) => {
      state.isOpenFacetsMobile = payload;
    },
    setOpenOrderMobile: (state, { payload }: { payload: boolean }) => {
      state.isOpenOrderMobile = payload;
    },
  },
});

export const {
  setSearchState,
  setLayout,
  setSort,
  setOpenFacetsMobile,
  setOpenOrderMobile,
} = productSlice.actions;
export default productSlice;
