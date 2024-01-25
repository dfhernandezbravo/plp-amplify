import productRespository from '@repositories/products';

async function getProductBySkus(skus: string) {
  try {
    const { data } = await productRespository().getProductsBySkuIds(skus);
    return data;
  } catch (err) {
    throw new Error(`Error: ${err} `);
  }
}

export default getProductBySkus;
