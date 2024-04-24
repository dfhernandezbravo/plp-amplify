import {
  Product as ProductCard,
  Variant,
} from '@ccom-easy-design-system/molecules.product-card/dist/types';

export type Product = ProductCard & {
  linkText: string;
  link: string;
  id: string;
  quantity: number;
  categories: string[];
  referenceId: {
    Key: string;
    Value: string;
  }[];
  variants: Variant[];
};
