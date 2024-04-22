import BreadcrumbPLP from '@components/atoms/breadcrumb';
import { BreadcrumbLink } from '@components/atoms/breadcrumb/types';
import PlpQueryParams from '@entities/plp-query-params';
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

const ContentPLP = () => {
  const { query } = useRouter();
  const { category, department } = query as PlpQueryParams;

  const breadcrumbLinks: BreadcrumbLink[] = [
    { url: '/', label: 'Inicio', isActive: false },
    { url: `/${department}`, label: department, isActive: false },
    { url: `/${department}/${category}`, label: category, isActive: true },
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
    if (department && category) {
      getProductsByCategories({ query: `${department}/${category}` });
    }
  }, [department, category]);

  if ((products && products.recordsFiltered === 0) || isErrorProducts) {
    return <SearchNotFound view="plp-not-found" type="category" />;
  }

  return (
    <PLPContext.Provider
      value={{
        isLoadingCMS,
        isLoadingProducts,
        products: products?.productList || [],
        facets: products?.facets || [],
        recordsFiltered: products?.recordsFiltered || 0,
        contentCMS,
      }}
    >
      <ShoppingCartEventLayout
        refreshProducts={() =>
          getProductsByCategories({ query: `${department}/${category}` })
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

const CategoryPLPPage = () => {
  return (
    <PLPLayout>
      <ContentPLP />
    </PLPLayout>
  );
};

export default CategoryPLPPage;
