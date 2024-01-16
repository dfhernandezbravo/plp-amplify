export type Item = {
  link: string;
  mobileImage?: string;
  image?: string;
  alt?: string;
  title?: string;
  imageUrl?: string;
  key: string;
};

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
  clusterId?: string;
};

export type CMSBody = {
  viewName: string;
  eventName: string;
  content: Content[];
};
