import { ProductCard } from '@cencosud-ds/easy-design-system';
import { useAppSelector } from '@store/hooks';
import styles from '../../styles.module.css';
import { ProductsContainer } from './styles';
import { useRouter } from 'next/router';
import { ProductPLP } from '@store/slices/products';

const ProductsPLP = () => {
  const { products, layout } = useAppSelector((state) => state.products);
  const router = useRouter();

  const handleClickCard = (product: ProductPLP) => {
    router.push(`/${product.linkText}/p`);
  };

  return (
    <div className={styles.products}>
      <ProductsContainer $layout={layout}>
        {products?.map((product, index) => (
          <ProductCard
            key={product.productId + '-' + index}
            product={product}
            layout={layout}
            onClickCard={() => handleClickCard(product)}
          />
        ))}
      </ProductsContainer>
    </div>
  );
};

export default ProductsPLP;
