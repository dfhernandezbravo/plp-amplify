import productRespository from '@repositories/products';

async function getProductsByClusterId(clusterId: string, maxItems: number) {
  try {
    const { data } = await productRespository().getProductsByClusterId(
      clusterId,
      maxItems,
    );
    return data.data;
  } catch (err) {
    throw new Error(`Error: ${err} `);
  }
}

export default getProductsByClusterId;
