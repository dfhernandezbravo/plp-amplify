import BreadcrumbPLP from '@components/atoms/breadcrumb';
import { BreadcrumbLink } from '@components/atoms/breadcrumb/types';
import PlpQueryParams from '@entities/plp-query-params';
import useGetCountItems from '@hooks/use-get-count-items';
import ContentCMS from '@modules/content-cms';
import Products from '@modules/products';
import SearchNotFound from '@modules/search-not-found';
import PLPContext from '@presentation/context/plp-context';
import PLPLayout from '@presentation/layouts/plp-layout';
import { PageContainer } from '@presentation/layouts/plp-layout/styles';
import ShoppingCartEventLayout from '@presentation/layouts/shopping-cart-events-layout';
import { useGetContentViewCms } from '@use-cases/cms/get-content-view';
import { useGetProductsByCategories } from '@use-cases/product/get-search-by-categories';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const PLPContent = () => {
  const { query } = useRouter();
  const { category, department, product, sort, count, page, filter } =
    query as PlpQueryParams;
  const { getCountItems } = useGetCountItems();

  const breadcrumbLinks: BreadcrumbLink[] = [
    { url: '/', label: 'Inicio', isActive: false },
    { url: `/${department}`, label: department, isActive: false },
    { url: `/${department}/${category}`, label: category, isActive: false },
    {
      url: `/${department}/${category}/${product}`,
      label: product,
      isActive: true,
    },
  ];

  const {
    isLoadingProducts,
    products,
    getProductsByCategories,
    isErrorProducts,
  } = useGetProductsByCategories();

  const { isLoadingCMS, contentCMS } = useGetContentViewCms({
    viewName: category,
  });

  useEffect(() => {
    if (department && category && product) {
      getProductsByCategories({
        categories: `${department}/${category}/${product}`,
        sort,
        filter,
        count,
        page,
      });
    }
  }, [department, category, product, filter, count, sort, page]);

  if ((products && products.recordsFiltered === 0) || isErrorProducts) {
    return <SearchNotFound view="plp-not-found" type="category" />;
  }

  return (
    <PLPContext.Provider
      value={{
        isLoadingCMS: isLoadingCMS,
        isLoadingProducts,
        products: products?.productList || [],
        facets: products?.facets || [],
        recordsFiltered: products?.recordsFiltered || 0,
        contentCMS,
      }}
    >
      <ShoppingCartEventLayout
        refreshProducts={() =>
          getProductsByCategories({
            categories: `${department}/${category}/${product}`,
            sort,
            filter,
            count: getCountItems({
              count,
            }),
            page,
          })
        }
      >
        <PageContainer>
          <BreadcrumbPLP links={breadcrumbLinks} />
          <ContentCMS />
          <Products />
        </PageContainer>
      </ShoppingCartEventLayout>
    </PLPContext.Provider>
  );
};

const ProductPLPPage = () => {
  return (
    <PLPLayout>
      <PLPContent />
    </PLPLayout>
  );
};

export default ProductPLPPage;
