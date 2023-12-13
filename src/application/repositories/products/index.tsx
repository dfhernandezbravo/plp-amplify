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
}

const productRespository = (httpInstance = bffInstance): ProductRepository => ({
  getSearchByCategories: ({ count, categories, page, sort }) =>
    httpInstance.get<SearchByCategoriesResponse>('/search/categories', {
      params: { count, page, categories, sort },
    }),
});

export default productRespository;
