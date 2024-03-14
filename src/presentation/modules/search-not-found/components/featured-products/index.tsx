import ProductsCarousel from '@components/molecules/products-carousel';
import { Content } from '@entities/cms';
import { ProductPLP } from '@store/slices/products';
import getProductsByClusterId from '@use-cases/product/get-products-by-cluster';
import getProductsByIds from '@use-cases/product/get-products-by-ids';
import getProductBySkus from '@use-cases/product/get-products-by-skus';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { FeaturedProductsContainer, FeaturedProductsTitle } from './styles';

const FeaturedProducts: React.FC<Content> = ({
  products,
  fieldName,
  maxItems,
  title,
}) => {
  const [productItems, setProductItems] = useState<ProductPLP[]>([]);

  const { data: productsCluster } = useQuery(
    ['get-products-by-cluster', { products, maxItems }],
    () => getProductsByClusterId(products, maxItems),
    {
      enabled: fieldName === 'clusterId',
    },
  );

  const { data: productsSkus } = useQuery(
    ['get-products-by-sku', { products }],
    () => getProductBySkus(products),
    {
      enabled: fieldName === 'sku',
    },
  );

  const { data: productsByIds } = useQuery(
    ['get-products-by-ids', { products }],
    () => getProductsByIds(products),
    {
      enabled: fieldName === 'productId',
    },
  );

  useEffect(() => {
    if (productsByIds) setProductItems(productsByIds);
    if (productsCluster) setProductItems(productsCluster);
    if (productsSkus) setProductItems(productsSkus);
  }, [productsByIds, productsCluster, productsSkus]);

  return (
    <FeaturedProductsContainer>
      <FeaturedProductsTitle>{title}</FeaturedProductsTitle>
      <ProductsCarousel items={productItems} />
    </FeaturedProductsContainer>
  );
};

export default FeaturedProducts;
