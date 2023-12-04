import { Content } from '@entities/cms';
import BannerCarousel from './banner-carousel';
import BreadcrumbCMS from './breadcrumb';
import PromotionalRibbons from './promotional-ribbon';
import Facets from './facets';
import OrderCMS from './order';
import QuickFiltersCMS from './quick-filters';
import ProductsPLP from './products';

type R<P = Record<string, never>> = React.FC<P>;

export interface ComponentsCMS {
  [key: string]: R<Content>;
}

const ContentComponent: ComponentsCMS = {
  'promotional-ribbon': PromotionalRibbons,
  breadcrumb: BreadcrumbCMS,
  'banner-carousel': BannerCarousel,
  'facets-plp': Facets,
  'order-plp': OrderCMS,
  'quick-filter-plp': QuickFiltersCMS,
  'products-plp': ProductsPLP,
};

export default ContentComponent;
