/* eslint-disable camelcase */
import { Item } from '@entities/cms';
import { useEvents } from '@hooks/use-events';
import { ProductPLP, TipoClick } from '@store/slices/products';
import { ANALYTICS_EVENTS } from 'src/application/infra/events/analytics.';

enum EventType {
  SelectItem = 'select_item',
  ViewItemList = 'view_item_list',
  AddToCart = 'add_to_cart',
  ViewPromotion = 'view_promotion',
  SelectPromotion = 'select_promotion',
}

const createItemObject = (product: ProductPLP) => {
  return {
    item_id: product?.referenceId?.[0]?.Value || '',
    item_name: product?.productName,
    discount: product?.adjustments[0]?.value,
    affiliation: 'Easy',
    item_brand: product.brand,
    item_category: product?.categories?.[0] || '',
    item_variant: product?.variants?.[0]?.id || '',
    price: product?.prices.brandPrice,
    list_price: product?.prices?.normalPrice,
    cenco_price: product?.prices?.brandPrice,
    item_list_id: 'plp_search',
    item_list_name: '',
    currency: product?.prices?.currency,
    quantity: 1,
    ribbons: product?.ribbons.map((ribbon) => ribbon.value).join(','),
    ratings_reviews: '',
  };
};

export const useDispatchProductEvent = () => {
  const { dispatchEvent } = useEvents();

  const dispatchProductEvent = (
    event: EventType,
    product: ProductPLP | ProductPLP[],
    tipoClic?: TipoClick,
  ) => {
    const isSingleProduct = !Array.isArray(product);
    const products = isSingleProduct ? [product] : product;

    dispatchEvent({
      name: ANALYTICS_EVENTS.Analytics,
      detail: {
        event,
        ...(isSingleProduct && tipoClic && { tipoClic }),
        ecommerce: {
          currency: products[0]?.prices.currency,
          items: products.map(createItemObject),
          ...(isSingleProduct && { value: products[0]?.prices.brandPrice }),
        },
      },
    });
  };

  const dispatchPromotionEvent = (item: Item, event: EventType) => {
    dispatchEvent({
      name: ANALYTICS_EVENTS.Analytics,
      detail: {
        event,
        eccommerce: {
          promo_id: item?.key || '',
          promo_name: item?.alt || '',
          creative_name: item?.image || '',
          creative_slot: item?.alt || '',
        },
      },
    });
  };

  const dispatchViewPromotionEvent = (item: Item) =>
    dispatchPromotionEvent(item, EventType.ViewPromotion);

  const dispatchSelectPromotionEvent = (item: Item) =>
    dispatchPromotionEvent(item, EventType.SelectPromotion);

  const dispatchSelectItemEvent = (product: ProductPLP, tipoClic: TipoClick) =>
    dispatchProductEvent(EventType.SelectItem, product, tipoClic);

  const dispatchViewItemListEvent = (products: ProductPLP[]) =>
    dispatchProductEvent(EventType.ViewItemList, products);

  const dispatchAddToCartEvent = (product: ProductPLP) =>
    dispatchProductEvent(EventType.AddToCart, product);

  return {
    dispatchSelectItemEvent,
    dispatchViewItemListEvent,
    dispatchAddToCartEvent,
    dispatchViewPromotionEvent,
    dispatchSelectPromotionEvent,
  };
};
