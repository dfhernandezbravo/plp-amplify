import { SearchByCategoriesRequest } from '@entities/product/repository/product-repository.types';
import productRespository from '@repositories/products';

export default async function getByClusterId(
  request: SearchByCategoriesRequest,
) {
  try {
    const { data } = await productRespository().getByClusterId(request);
    return data;
  } catch (error) {
    throw new Error('Error');
  }
}
