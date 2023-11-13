export type Filter = {
  image: string;
  url: string;
  alt: string;
};

export type Props = {
  filters: Filter[];
  ring?: boolean;
  indicator?: boolean;
  currentUrl?: string;
  onClick?: (filter: Filter) => void;
};
