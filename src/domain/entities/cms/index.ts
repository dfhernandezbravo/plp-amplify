export type Item = {
  link: string;
  mobileImage?: string;
  image?: string;
  alt?: string;
  title?: string;
  imageUrl?: string;
  key: string;
  redirectTo: string;
};

export enum ShapeTypes {
  CIRCLE = 'circle',
  SQUARE = 'square',
}

export type Content = {
  fullWidth?: boolean;
  backgroundColor?: string;
  imageMobile?: string;
  imageDesktop?: string;
  link?: string;
  alt?: string;
  endDate?: string;
  startDate?: string;
  isActive: boolean;
  component: string;
  items?: Item[];
  description?: string;
  title?: string;
  visibleMobile?: boolean;
  visibleDesktop?: boolean;
  popularSearches?: string;
  icon?: string;
  clusterId?: string;
  shape: ShapeTypes;
  itemsPerRow: number;
  products: string;
  fieldName: 'clusterId' | 'skuId' | 'productId';
  maxItems: number;
};

export type CMSBody = {
  viewName: string;
  eventName: string;
  content: Content[];
};
