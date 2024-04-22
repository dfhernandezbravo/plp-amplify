import { Product } from '@ccom-easy-design-system/molecules.product-card/dist/types';
import ProductCard from '@components/molecules/product-card';
import useQueryParams from '@hooks/use-query-params';
import PLPContext from '@presentation/context/plp-context';
import { useAppSelector } from '@store/hooks';
import { ProductPLP, TipoClick } from '@store/slices/products';
import { useDispatchProductEvent } from '@use-cases/product/dispatch-product-event';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import ProductImage from './components/product-image';
import ProductPagination from './components/product-pagination';
import {
  Modal,
  ProductsContainer,
  SpinnerElement,
  SpinnerWrapper,
} from './styles';
import ProductsSkeleton from './components/skeleton';

const ProductsPLP = () => {
  const { dispatchSelectItemEvent, dispatchAddToCartEvent } =
    useDispatchProductEvent();
  const router = useRouter();
  const { updateQueryParams } = useQueryParams();
  const { page } = router.query;

  const { products, recordsFiltered, isLoadingProducts } =
    useContext(PLPContext);

  const { layout, count } = useAppSelector((state) => state.products);

  let pagesCount = recordsFiltered;
  if (count) pagesCount = Math.ceil(recordsFiltered / count);

  const [loadPDP, setLoadPDP] = useState(false);

  const onPageChange = (page: string) => {
    updateQueryParams({ page });
  };

  const handleClickCard = async (product: ProductPLP, id: string | null) => {
    dispatchSelectItemEvent(product, TipoClick.ClicPdp, id);
    let url = `/${product.linkText}/p`;
    if (id) url += `?skuId=${id}`;

    setLoadPDP(true);
    await router.push(url);
  };

  const handleOnClickButton = ({
    variantId,
    product,
  }: {
    variantId: string;
    product: Product;
  }) => {
    const productSelected: ProductPLP = {
      id: variantId,
      quantity: 1,
      ...product,
    };

    dispatchSelectItemEvent(product, TipoClick.AddClic, variantId);
    dispatchAddToCartEvent(product, variantId);
    document.dispatchEvent(
      new CustomEvent('ADD_ITEM_SHOPPING_CART', {
        detail: { product: productSelected },
      }),
    );
  };

  if (isLoadingProducts) return <ProductsSkeleton />;

  return (
    <div>
      {loadPDP && (
        <Modal>
          <SpinnerWrapper>
            <SpinnerElement />
          </SpinnerWrapper>
        </Modal>
      )}
      <ProductsContainer $layout={layout}>
        {products?.map((product, index) => (
          <ProductCard
            key={product.productId + '-' + index}
            product={product}
            layout={layout}
            onClickCard={(selectedVariant: string | null) =>
              handleClickCard(product, selectedVariant)
            }
            hideCartButton={product.availableQuantity === 0}
            onClickButton={handleOnClickButton}
            renderImage={(imageUrl: string) => (
              <ProductImage
                imageUrl={imageUrl}
                product={product}
                layout={layout}
              />
            )}
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
