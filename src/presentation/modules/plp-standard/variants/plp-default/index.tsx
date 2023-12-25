import { Layout } from '@cencosud-ds/easy-design-system';
import BreadcrumbPLP from '@modules/plp-standard/components/breadcrumb';
import Facets from '@modules/plp-standard/components/facets';
import OrderCMS from '@modules/plp-standard/components/order';
import ProductsPLP from '@modules/plp-standard/components/products';
import Desktop from '@modules/plp-standard/layouts/Desktop';
import Mobile from '@modules/plp-standard/layouts/Mobile';
import { PlpContainer } from '@modules/plp-standard/styles';
import { useAppSelector } from '@store/hooks';

const PLPDefault = () => {
  const { isOpenFacetsMobile } = useAppSelector((state) => state.products);

  return (
    <PlpContainer>
      <Layout is={['Desktop']}>
        <Desktop>
          <BreadcrumbPLP />
          <OrderCMS />
          <Facets />
          <ProductsPLP />
        </Desktop>
      </Layout>

      <Layout is={['Tablet', 'Phone']}>
        <Mobile>
          <BreadcrumbPLP />
          <OrderCMS />
          {isOpenFacetsMobile && <Facets />}
          <ProductsPLP />
        </Mobile>
      </Layout>
    </PlpContainer>
  );
};

export default PLPDefault;
