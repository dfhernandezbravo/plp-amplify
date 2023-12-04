import { Product } from '@cencosud-ds/easy-design-system';

export const productInitial: Product = {
  productId: '1196491852',
  productName: 'Cama europea king gris máximo cobre Flex',
  brand: 'Flex',
  imageUrl:
    'https://easyclqa.vtexassets.com/arquivos/ids/214294/1194021.jpg?v=637671655528870000',
  availableQuantity: 0,
  promotions: [
    {
      id: '1',
      name: 'MxN',
      value: '3x2',
      type: 'discount',
    },
  ],
  adjustments: [
    {
      name: 'D_20_CENCO PRUEBA 1',
      id: 'CAT',
      priceType: 'brand',
      percentDiscount: '20',
      value: 19998,
      description: 'string',
    },
  ],
  prices: {
    normalPrice: 99990,
    currency: 'CLP',
    offerPrice: null,
    brandPrice: 79992,
  },
  pricesM2: null,
  ribbons: {
    campaign: 'Cyber',
    event: 'Despacho Gratis',
    promotion: '3x1',
    typePromotion: 'Exclusivo online',
    logistic: 'Recibe Hoy',
  },
};
