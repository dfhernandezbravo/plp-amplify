import { ProductCard } from '@cencosud-ds/easy-design-system';
import { useAppSelector } from '@store/hooks';
import styles from '../../styles.module.css';
import { ProductsContainer } from './styles';
import Link from 'next/link';

const ProductsPLP = () => {
  const { products, layout } = useAppSelector((state) => state.products);

  return (
    <div className={styles.products}>
      <ProductsContainer $layout={layout}>
        {products?.map((product, index) => (
          <Link
            href={`/${product.linkText}/p`}
            key={product.productId + '-' + index}
          >
            <ProductCard product={product} layout={layout} />
          </Link>
        ))}
      </ProductsContainer>
    </div>
  );
};

export default ProductsPLP;
