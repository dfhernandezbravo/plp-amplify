import { Item } from '@entities/cms';

export type Props = {
  filters: Item[];
  ring?: boolean;
  indicator?: boolean;
  currentUrl: string;
  onClick: (filter: Item) => void;
};
