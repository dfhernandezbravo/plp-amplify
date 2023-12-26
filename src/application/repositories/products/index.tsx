import bffInstance from '@data-sources/bff-web-instance';
import {
  SearchByCategoriesRequest,
  SearchByCategoriesResponse,
} from '@entities/product/repository/product-repository.types';
import { AxiosResponse } from 'axios';

interface ProductRepository {
  getSearchByCategories: (
    request: SearchByCategoriesRequest,
  ) => Promise<AxiosResponse<SearchByCategoriesResponse>>;
  getSearch: (
    request: SearchByCategoriesRequest,
  ) => Promise<AxiosResponse<SearchByCategoriesResponse>>;
}

const productRespository = (httpInstance = bffInstance): ProductRepository => ({
  getSearchByCategories: ({ count, categories, page, sort, filter }) =>
    httpInstance.get<SearchByCategoriesResponse>('/search/categories', {
      params: { count, page, categories, sort, filter },
    }),
  getSearch: ({ count, query, page, sort, filter }) =>
    httpInstance.get<SearchByCategoriesResponse>('/search', {
      params: { count, page, query, sort, filter },
    }),
});

export default productRespository;
