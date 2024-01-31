import { SearchByCategoriesRequest } from '@entities/product/repository/product-repository.types';
import productRespository from '@repositories/products';

export default async function getSearchByCategories(
  request: SearchByCategoriesRequest,
) {
  try {
    const { data } = await productRespository().getSearchByCategories(request);
    return data;
  } catch (error) {
    throw new Error('Error');
  }
}
