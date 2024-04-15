import { ComponentsCMS } from '@entities/cms/components-cms';
import NoSuggestions from './no-suggestions';
import BannerCarousel from '@modules/content-cms/components/banner-carousel';
import FeaturedCategories from './featured-categories';
import FeaturedProducts from './featured-products';
import PLPNotFoundText from './plp-not-found-text';

export const ComponentsSearchNotFound: ComponentsCMS = {
  'no-suggestions': NoSuggestions,
  'banner-carousel': BannerCarousel,
  'menu-carousel': FeaturedCategories,
  'featured-products': FeaturedProducts,
  'plp-not-found-text': PLPNotFoundText,
};
