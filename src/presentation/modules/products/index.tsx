import Facets from '@modules/products/components/facets';
import OrderCMS from '@modules/products/components/order';
import ProductsPLP from '@modules/products/components/products';
import PromotionalTextCMS from './components/promotional-text';
import QuickFiltersCMS from './components/quick-filters';
import {
  LayoutContainer,
  ProductListContainer,
  ProductsLayout,
} from './styles';

const Products = () => {
  return (
    <ProductsLayout>
      <LayoutContainer>
        <Facets />
        <ProductListContainer>
          <OrderCMS />
          <QuickFiltersCMS />
          <ProductsPLP />
          <PromotionalTextCMS />
        </ProductListContainer>
      </LayoutContainer>
    </ProductsLayout>
  );
};

export default Products;
