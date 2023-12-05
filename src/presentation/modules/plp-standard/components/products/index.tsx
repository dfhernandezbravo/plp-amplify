import { Product, ProductCard } from '@cencosud-ds/easy-design-system';
import React from 'react';
import styles from '../../styles.module.css';
import { productInitial } from './product-mock';
import { ProductsContainer } from './styles';

const ProductsPLP = () => {
  const products: Product[] = Array(16).fill(productInitial);

  return (
    <div className={styles.products}>
      <ProductsContainer>
        {products?.map((product, index) => (
          <ProductCard
            product={product}
            key={product.productId + '-' + index}
            layout="grid"
          />
        ))}
      </ProductsContainer>
    </div>
  );
};

export default ProductsPLP;
