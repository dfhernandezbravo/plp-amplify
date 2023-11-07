export type Event = 'order' | 'filter';

export type Props = {
  area?: string;
  onClick: (event: Event) => void;
};
