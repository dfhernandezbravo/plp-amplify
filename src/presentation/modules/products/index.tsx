import Facets from '@modules/plp-standard/components/facets';
import OrderCMS from '@modules/plp-standard/components/order';
import ProductsPLP from '@modules/plp-standard/components/products';
import { ProductListContainer, ProductsContainer } from './styles';

const Products = () => {
  return (
    <ProductsContainer>
      <Facets />
      <ProductListContainer>
        <OrderCMS />
        <ProductsPLP />
      </ProductListContainer>
    </ProductsContainer>
  );
};

export default Products;
