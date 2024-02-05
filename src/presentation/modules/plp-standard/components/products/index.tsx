import ProductCard from '@components/molecules/product-card';
import useQueryParams from '@hooks/use-query-params';
import { useAppSelector } from '@store/hooks';
import { ProductPLP } from '@store/slices/products';
import { useRouter } from 'next/router';
import styles from '../../styles.module.css';
import ProductPagination from './components/product-pagination';
import { ProductsContainer } from './styles';
import { Product } from '@ccom-easy-design-system/molecules.product-card/dist/types';

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

  const handleOnClickButton = ({
    variantId,
    product,
  }: {
    variantId: string;
    product: Product;
  }) => {
    const productSelected = { ...product };
    productSelected.productId = variantId;

    document.dispatchEvent(
      new CustomEvent('ADD_ITEM_SHOPPING_CART', {
        detail: { product: productSelected, quantity: 1 },
      }),
    );
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
            hideCartButton={product.availableQuantity === 0}
            onClickButton={handleOnClickButton}
          />
        ))}
      </ProductsContainer>
      <ProductPagination
        maxPagesCount={pagesCount < 5 ? pagesCount : 5}
        currentPage={page ? parseInt(page as string) : 1}
        setCurrentPage={onPageChange}
        pagesCount={pagesCount}
      />
    </div>
  );
};

export default ProductsPLP;
