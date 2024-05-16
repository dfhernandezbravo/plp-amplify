import { Product } from '@ccom-easy-design-system/molecules.product-card/dist/types';
import ProductCard from '@components/molecules/product-card';
import PlpQueryParams from '@entities/plp-query-params';
import useGetCountItems from '@hooks/use-get-count-items';
import useQueryParams from '@hooks/use-query-params';
import PLPContext from '@presentation/context/plp-context';
import { ProductPLP, TipoClick } from '@store/slices/products';
import { useDispatchProductEvent } from '@use-cases/product/dispatch-product-event';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import ProductImage from './components/product-image';
import ProductPagination from './components/product-pagination';
import ProductsSkeleton from './components/skeleton';
import {
  Modal,
  ProductsContainer,
  SpinnerElement,
  SpinnerWrapper,
} from './styles';

const ProductsPLP = () => {
  const router = useRouter();
  const { page, count, layout } = router.query as PlpQueryParams;
  const { updateQueryParams } = useQueryParams();
  const [loadPDP, setLoadPDP] = useState(false);
  const { getCountItems } = useGetCountItems();

  const { dispatchSelectItemEvent, dispatchAddToCartEvent } =
    useDispatchProductEvent();

  const { products, recordsFiltered, isLoadingProducts } =
    useContext(PLPContext);

  const [pagesCount, setPagesCount] = useState(recordsFiltered);

  useEffect(() => {
    const countItem = getCountItems({ count });
    setPagesCount(Math.ceil(recordsFiltered / parseInt(countItem)));
  }, [recordsFiltered, count]);

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

  if (isLoadingProducts) return <ProductsSkeleton layout={layout || 'grid'} />;

  return (
    <div>
      {loadPDP && (
        <Modal>
          <SpinnerWrapper>
            <SpinnerElement />
          </SpinnerWrapper>
        </Modal>
      )}
      <ProductsContainer $layout={layout || 'grid'} className="fade-in">
        {products?.map((product, index) => (
          <ProductCard
            key={product.productId + '-' + index}
            product={product}
            layout={layout || 'grid'}
            onClickCard={(selectedVariant: string | null) =>
              handleClickCard(product, selectedVariant)
            }
            hideCartButton={product.availableQuantity === 0}
            onClickButton={handleOnClickButton}
            renderImage={(imageUrl: string) => (
              <ProductImage
                imageUrl={imageUrl}
                product={product}
                layout={layout || 'grid'}
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
