import { Layout } from '@cencosud-ds/easy-design-system';
import BreadcrumbPLP from '@modules/plp-standard/components/breadcrumb';
import Facets from '@modules/plp-standard/components/facets';
import OrderCMS from '@modules/plp-standard/components/order';
import ProductsPLP from '@modules/plp-standard/components/products';
import Desktop from '@modules/plp-standard/layouts/Desktop';
import Mobile from '@modules/plp-standard/layouts/Mobile';
import { PlpContainer } from '@modules/plp-standard/styles';
import { useRouter } from 'next/router';

const PLPDefault = () => {
  const { asPath } = useRouter();
  const hideBreadcrumb = /cluster|eventos/.test(asPath);
  return (
    <PlpContainer>
      <Layout is={['Tablet', 'Phone']}>
        <Mobile>
          {!hideBreadcrumb && <BreadcrumbPLP />}
          <OrderCMS />
          <Facets />
          <ProductsPLP />
        </Mobile>
      </Layout>
      <Layout is={['Desktop']}>
        <Desktop>
          {!hideBreadcrumb && <BreadcrumbPLP />}
          <OrderCMS />
          <Facets />
          <ProductsPLP />
        </Desktop>
      </Layout>
    </PlpContainer>
  );
};

export default PLPDefault;
