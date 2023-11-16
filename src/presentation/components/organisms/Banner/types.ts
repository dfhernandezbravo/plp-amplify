import { AutoPlay } from '../../molecules/Carousel';

export type Item = {
  url: string;
  title: string;
  image: string;
  external?: boolean;
  startDate?: string;
  endDate?: string;
  isActive?: boolean;
};

export type Props = {
  items: Item[];
  loop?: boolean;
  autoplay?: AutoPlay;
  pagination?: boolean;
  onClick?: (item: Item) => void;
};
