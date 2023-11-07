export type Layout = 'grid' | 'list';

export type Props = {
  isShowText?: boolean;
  defaultValue?: Layout;
  onChange: (layout: Layout) => void;
};
