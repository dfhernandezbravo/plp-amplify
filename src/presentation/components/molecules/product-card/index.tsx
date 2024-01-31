import { ProductCardProps } from '@ccom-easy-design-system/molecules.product-card/dist/types';
import dynamic from 'next/dynamic';
import React from 'react';

const ProductCardBit = dynamic(
  () =>
    import('@ccom-easy-design-system/molecules.product-card').then(
      (module) => module.ProductCard,
    ),
  { ssr: false },
);

const ProductCard: React.FC<ProductCardProps> = (props) => {
  return <ProductCardBit {...props} />;
};

export default ProductCard;
