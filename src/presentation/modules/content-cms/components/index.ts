import { ComponentsCMS } from '@entities/cms/components-cms';
import BannerCarousel from './banner-carousel';
import PromotionalRibbons from './promotional-ribbon';

type ContentComponentStruct = ComponentsCMS;

const ContentComponent: ContentComponentStruct = {
  'promotional-ribbon': PromotionalRibbons,
  'banner-carousel': BannerCarousel,
};

export default ContentComponent;
