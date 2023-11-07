export type Layout = 'grid' | 'list';

export type Props = {
  defaultValue?: Layout;
  onChange: (layout: Layout) => void;
};
