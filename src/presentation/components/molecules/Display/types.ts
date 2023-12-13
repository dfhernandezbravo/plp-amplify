export type LayoutOptions = 'grid' | 'list';

export type Props = {
  isShowText?: boolean;
  defaultValue?: LayoutOptions;
  onChange: (layout: LayoutOptions) => void;
};
