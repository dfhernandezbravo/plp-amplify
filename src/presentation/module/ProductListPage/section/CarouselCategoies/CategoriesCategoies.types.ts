import { Url } from 'next/dist/shared/lib/router/router';

export type CarouselCategoriesItemProps = {
  title?: string;
  image?: string;
  link: Url;
};

export type CarouselCategoriesProps = {
  items: CarouselCategoriesItemProps[];
};
