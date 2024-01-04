import { ProductCard } from '@cencosud-ds/easy-design-system';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import styles from '../../styles.module.css';
import { ProductsContainer } from './styles';
import { useRouter } from 'next/router';
import { ProductPLP, setPage } from '@store/slices/products';
import Link from 'next/link';
import ProductPagination from './components/product-pagination';

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
      <ProductPagination
        maxPagesCount={pagesCount < 5 ? pagesCount : 5}
        currentPage={page}
        setCurrentPage={onPageChange}
        pagesCount={pagesCount}
      ></ProductPagination>
    </div>
  );
};

export default ProductsPLP;
