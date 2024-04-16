import BreadcrumbPLP from '@components/atoms/breadcrumb';
import Facets from '@modules/products/components/facets';
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
      <Mobile>
        {!hideBreadcrumb && <BreadcrumbPLP />}
        <OrderCMS />
        <Facets />
        <ProductsPLP />
      </Mobile>
      <Desktop>
        {!hideBreadcrumb && <BreadcrumbPLP />}
        <OrderCMS />
        <Facets />
        <ProductsPLP />
      </Desktop>
    </PlpContainer>
  );
};

export default PLPDefault;
