import { Product } from '@cencosud-ds/easy-design-system';
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
  getByClusterId: (
    request: SearchByCategoriesRequest,
  ) => Promise<AxiosResponse<SearchByCategoriesResponse>>;
  getProductsByClusterId: (
    clusterId: string,
    maxItems: number,
  ) => Promise<AxiosResponse<Product[]>>;
  getProductsByIds: (ids: string) => Promise<AxiosResponse<Product[]>>;
  getProductsBySkuIds: (skus: string) => Promise<AxiosResponse<Product[]>>;
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

  getByClusterId: ({ count, query, page, sort, filter, clusterId }) =>
    httpInstance.get<SearchByCategoriesResponse>(
      `/search/clusters/${clusterId}`,
      {
        params: { count, page, query, sort, filter },
      },
    ),

  getProductsByClusterId: (clusterId, maxItems) =>
    httpInstance.get(
      `/api/catalog/products/byClusterId/${encodeURIComponent(
        `${clusterId}&_from=0&_to=${maxItems - 1}`,
      )}`,
    ),

  getProductsByIds: (ids) =>
    httpInstance.get(`/products/list?productIds=${ids}`),

  getProductsBySkuIds: (skus: string) =>
    httpInstance.get(
      `/api/catalog/products/bySkus/${encodeURIComponent(skus)}`,
    ),
});

export default productRespository;
