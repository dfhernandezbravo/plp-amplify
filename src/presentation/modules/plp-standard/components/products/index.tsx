import { ProductCard } from '@cencosud-ds/easy-design-system';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import styles from '../../styles.module.css';
import { ProductsContainer } from './styles';
import ProductPagination from './components/product-pagination';
import { setPage, ProductPLP } from '@store/slices/products';
import { useRouter } from 'next/router';

const ProductsPLP = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { products, layout, page, recordsFiltered, count } = useAppSelector(
    (state) => state.products,
  );
  const pagesCount = Math.ceil(recordsFiltered / count);

  const onPageChange = (page: number) => {
    dispatch(setPage(page));
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
        currentPage={page}
        setCurrentPage={onPageChange}
        pagesCount={pagesCount}
      ></ProductPagination>
    </div>
  );
};

export default ProductsPLP;
