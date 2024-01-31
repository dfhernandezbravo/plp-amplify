import { Item } from '@entities/cms';
import { AutoPlay } from '../../molecules/Carousel';

export type Props = {
  items: Item[];
  loop?: boolean;
  autoplay?: AutoPlay;
  pagination?: boolean;
  onClick?: (item: Item) => void;
};
