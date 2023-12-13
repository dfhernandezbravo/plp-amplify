import { ProductCard } from '@cencosud-ds/easy-design-system';
import { useAppSelector } from '@store/hooks';
import styles from '../../styles.module.css';
import { ProductsContainer } from './styles';

const ProductsPLP = () => {
  const { products, layout } = useAppSelector((state) => state.products);

  return (
    <div className={styles.products}>
      <ProductsContainer $layout={layout}>
        {products?.map((product, index) => (
          <ProductCard
            product={product}
            key={product.productId + '-' + index}
            layout={layout}
          />
        ))}
      </ProductsContainer>
    </div>
  );
};

export default ProductsPLP;
