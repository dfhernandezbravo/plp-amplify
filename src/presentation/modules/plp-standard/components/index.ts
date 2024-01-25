import { ComponentsCMS } from '@entities/cms/components-cms';
import BannerCarousel from './banner-carousel';
import BreadcrumbPLP from './breadcrumb';
import Facets from './facets';
import InputClusterIdCMS from './input-cluster-id';
import OrderCMS from './order';
import ProductsPLP from './products';
import PromotionalRibbons from './promotional-ribbon';
import PromotionalText from './promotional-text';
import QuickFiltersCMS from './quick-filters';

const ContentComponent: ComponentsCMS = {
  'promotional-ribbon': PromotionalRibbons,
  breadcrumb: BreadcrumbPLP,
  'banner-carousel': BannerCarousel,
  'facets-plp': Facets,
  'order-plp': OrderCMS,
  'quick-filter-plp': QuickFiltersCMS,
  'products-plp': ProductsPLP,
  'promotional-text-plp': PromotionalText,
  'input-cluster-id': InputClusterIdCMS,
};

export default ContentComponent;
