import { ProductCard } from '@cencosud-ds/easy-design-system';
import { useAppSelector } from '@store/hooks';
import styles from '../../styles.module.css';
import { ProductsContainer } from './styles';
import ProductPagination from './components/product-pagination';
import { ProductPLP } from '@store/slices/products';
import { useRouter } from 'next/router';
import useQueryParams from '@hooks/use-query-params';

const ProductsPLP = () => {
  const router = useRouter();
  const { updateQueryParams } = useQueryParams();
  const { page } = router.query;

  const { products, layout, recordsFiltered, count } = useAppSelector(
    (state) => state.products,
  );
  const pagesCount = Math.ceil(recordsFiltered / count);

  const onPageChange = (page: string) => {
    updateQueryParams({ page });
  };
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
        currentPage={page ? parseInt(page as string) : 1}
        setCurrentPage={onPageChange}
        pagesCount={pagesCount}
      ></ProductPagination>
    </div>
  );
};

export default ProductsPLP;
