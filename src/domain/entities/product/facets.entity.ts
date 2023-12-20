export type ValueFacets = {
  id: string;
  quantity: number;
  name: string;
  key: string;
  value: string;
  selected: boolean;
  href: string;
  range: {
    from: number;
    to: number;
  };
};

export type Facets = {
  type: string;
  name: string;
  hidden: boolean;
  key: string;
  quantity: number;
  values: ValueFacets[];
};
