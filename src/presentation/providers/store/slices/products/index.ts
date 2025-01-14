import {
  Variant,
  Product,
} from '@ccom-easy-design-system/molecules.product-card/dist/types';
import { LayoutOptions } from '@components/molecules/Display/types';
import { OrderOptions } from '@components/molecules/Filter/types';
import { Facets } from '@entities/product/facets.entity';
import { SearchByCategoriesResponse } from '@entities/product/repository/product-repository.types';
import { createSlice } from '@reduxjs/toolkit';

export enum TipoClick {
  AddClic = 'add clic',
  ClicPdp = 'clic PDP',
}
export type ProductPLP = Product &
  Partial<{
    linkText: string;
    link: string;
    id: string;
    quantity: number;
    categories: string[];
    referenceId: {
      Key: string;
      Value: string;
    }[];
    variants: Variant[];
    tipoClick: TipoClick;
  }>;

type ProductSliceState = {
  products: ProductPLP[];
  facets: Facets[];
  recordsFiltered: number;
  count?: number;
  sort?: OrderOptions;
  layout: LayoutOptions;
  filter?: string;
  isOpenFacetsMobile: boolean;
  isOpenOrderMobile: boolean;
  page: string;
};

const initialState: ProductSliceState = {
  products: [],
  facets: [],
  count: undefined,
  recordsFiltered: 0,
  sort: 'orders:desc',
  layout: 'grid',
  isOpenFacetsMobile: false,
  isOpenOrderMobile: false,
  page: '1',
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
    setCount: (state, { payload }: { payload: number }) => {
      state.count = payload;
    },
  },
});

export const {
  setSearchState,
  setLayout,
  setSort,
  setOpenFacetsMobile,
  setOpenOrderMobile,
  setCount,
} = productSlice.actions;
export default productSlice;
