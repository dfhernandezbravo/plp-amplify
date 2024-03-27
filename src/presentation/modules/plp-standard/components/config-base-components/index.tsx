import { Content } from '@entities/cms';
import BreadcrumbPLP from '../breadcrumb';
import OrderCMS from '../order';
import ProductsPLP from '../products';
import { Layout } from '@cencosud-ds/easy-design-system';
import FacetsDesktop from '../facets/layout/desktop';
import { useAppSelector } from '@store/hooks';
import FacetsMobile from '../facets/layout/mobile';

const ConfigBaseComponents = (content: Content) => {
  const {
    enableBreadcrumbsComponent,
    enableOrderComponent,
    enableProductsComponent,
    enableDesktopFacetsComponent,
    enableMobileFacetsComponent,
  } = content;
  const { isOpenFacetsMobile } = useAppSelector((state) => state.products);

  if (content) {
    let enabledComponents = [];

    if (enableBreadcrumbsComponent) enabledComponents.push(<BreadcrumbPLP />);
    if (enableOrderComponent) enabledComponents.push(<OrderCMS />);
    if (enableProductsComponent) enabledComponents.push(<ProductsPLP />);
    if (enableDesktopFacetsComponent)
      enabledComponents.push(
        <Layout is={['Desktop']}>
          <FacetsDesktop />
        </Layout>,
      );
    if (enableMobileFacetsComponent)
      enabledComponents.push(
        <Layout is={['Tablet', 'Phone']}>
          {isOpenFacetsMobile ? <FacetsMobile /> : null}
        </Layout>,
      );

    return enabledComponents;
  }
  return <></>;
};
export default ConfigBaseComponents;
