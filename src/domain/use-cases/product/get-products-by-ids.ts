import productRespository from '@repositories/products';

async function getProductsByIds(ids: string) {
  try {
    const { data } = await productRespository().getProductsByIds(ids);
    return data;
  } catch (err) {
    throw new Error(`Error: ${err} `);
  }
}

export default getProductsByIds;
