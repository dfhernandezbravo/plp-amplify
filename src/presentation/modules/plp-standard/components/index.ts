import { Content } from '@entities/cms';
import BannerCarousel from './banner-carousel';
import BreadcrumbPLP from './breadcrumb';
import Facets from './facets';
import OrderCMS from './order';
import ProductsPLP from './products';
import PromotionalRibbons from './promotional-ribbon';
import PromotionalText from './promotional-text';
import QuickFiltersCMS from './quick-filters';

type R<P = Record<string, never>> = React.FC<P>;

export interface ComponentsCMS {
  [key: string]: R<Content>;
}

const ContentComponent: ComponentsCMS = {
  'promotional-ribbon': PromotionalRibbons,
  breadcrumb: BreadcrumbPLP,
  'banner-carousel': BannerCarousel,
  'facets-plp': Facets,
  'order-plp': OrderCMS,
  'quick-filter-plp': QuickFiltersCMS,
  'products-plp': ProductsPLP,
  'promotional-text-plp': PromotionalText,
};

export default ContentComponent;
