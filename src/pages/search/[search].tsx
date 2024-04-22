import Products from '@modules/products';
import SearchNotFound from '@modules/search-not-found';
import PLPContext from '@presentation/context/plp-context';
import PLPLayout from '@presentation/layouts/plp-layout';
import { PageContainer } from '@presentation/layouts/plp-layout/styles';
import ShoppingCartEventLayout from '@presentation/layouts/shopping-cart-events-layout';
import { useGetSearch } from '@use-cases/product/get-search';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React, { useEffect } from 'react';

interface SearchQueryParams extends ParsedUrlQuery {
  search: string;
  filter: string;
  page: string;
}

const PLPContent: React.FC = () => {
  const { query } = useRouter();
  const { search } = query as SearchQueryParams;
  const { isErrorProducts, isLoadingProducts, products, getProductsBySearch } =
    useGetSearch();

  useEffect(() => {
    if (search) getProductsBySearch(search);
  }, [search]);

  if ((products && products.recordsFiltered === 0) || isErrorProducts) {
    return (
      <SearchNotFound
        title={`Sin resultados de búsqueda para "${search}"`}
        view="search-not-found"
        type="search"
      />
    );
  }

  return (
    <PLPContext.Provider
      value={{
        isLoadingProducts,
        products: products?.productList || [],
        facets: products?.facets || [],
        recordsFiltered: products?.recordsFiltered || 0,
      }}
    >
      <ShoppingCartEventLayout
        refreshProducts={() => getProductsBySearch(search)}
      >
        <PageContainer>
          <Products />
        </PageContainer>
      </ShoppingCartEventLayout>
    </PLPContext.Provider>
  );
};

const SearchPLPPage = () => {
  return (
    <PLPLayout>
      <PLPContent />
    </PLPLayout>
  );
};

export default SearchPLPPage;
