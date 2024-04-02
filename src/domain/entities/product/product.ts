export type RibbonGroup =
  | 'event'
  | 'promotionShipping'
  | 'promotions'
  | 'promotionDiscount'
  | 'exclusive'
  | 'logistic';

export type RibbonType = {
  group: RibbonGroup;
  background: string;
  color: string;
  value: string;
};

export type PriceType = {
  currency: string;
  normalPrice: number;
  offerPrice: number | null;
  brandPrice?: number | null;
};

export type AdjustmentType = {
  id: string;
  value: number;
  name: string;
  percentDiscount: string;
  priceType: string;
  description?: string;
};

export type Promotion = {
  id: string;
  name: string;
  value: string;
  type: string;
};

export type Variant = {
  id: string;
  specifications: {
    name: string;
    values: string[];
  }[];
  images: {
    imageUrl: string;
    imageText: string;
  }[];
};

export type Product = {
  productId: string;
  productName: string;
  link?: string;
  imageUrl: string;
  brand: string;
  availableQuantity: number;
  promotions: Promotion[];
  adjustments: AdjustmentType[];
  prices: PriceType;
  pricesM2: PriceType | null;
  ribbons: RibbonType[];
  variants?: Variant[];
  linkText?: string;
  description?: string;
  categories?: string[];
  categoriesIds?: string[];
  referenceId?: {
    Key: string;
    Value: string;
  }[];
};
