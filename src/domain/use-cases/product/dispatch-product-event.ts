/* eslint-disable camelcase */
import { Item } from '@entities/cms';
import { Device } from '@hooks/use-device';
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

type DispatchProductEvent = {
  event: EventType;
  product: ProductPLP | ProductPLP[];
  tipoClic?: TipoClick;
  variantId?: string | null;
};

const createItemObject = (product: ProductPLP, variantId?: string | null) => {
  return {
    item_id: product?.referenceId?.[0]?.Value || '',
    item_name: product?.productName,
    discount: product?.adjustments[0]?.value,
    affiliation: 'Easy',
    item_brand: product.brand,
    item_category: product?.categories?.[0] || '',
    item_variant: variantId || product?.referenceId?.[0]?.Value || '',
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

  const dispatchProductEvent = ({
    event,
    product,
    tipoClic,
    variantId,
  }: DispatchProductEvent) => {
    const isSingleProduct = !Array.isArray(product);
    const products = isSingleProduct ? [product] : product;

    dispatchEvent({
      name: ANALYTICS_EVENTS.Analytics,
      detail: {
        event,
        ...(isSingleProduct && tipoClic && { tipoClic }),
        ecommerce: {
          currency: products[0]?.prices.currency,
          items: products.map((prod) => createItemObject(prod, variantId)),
          ...(isSingleProduct && { value: products[0]?.prices.brandPrice }),
        },
      },
    });
  };

  const dispatchPromotionEvent = (
    item: Item,
    event: EventType,
    device: Device,
  ) => {
    return dispatchEvent({
      name: ANALYTICS_EVENTS.Analytics,
      detail: {
        event,
        eccommerce: {
          promo_id: 'Banner superior 1',
          promo_name: item?.alt || '',
          creative_name:
            device === 'Desktop' ? item?.image || '' : item?.mobileImage || '',
          creative_slot: 'Banner superior 1 0',
        },
      },
    });
  };

  const dispatchViewPromotionEvent = (item: Item, device: Device) =>
    dispatchPromotionEvent(item, EventType.ViewPromotion, device);

  const dispatchSelectPromotionEvent = (item: Item, device: Device) =>
    dispatchPromotionEvent(item, EventType.SelectPromotion, device);

  const dispatchSelectItemEvent = (
    product: ProductPLP,
    tipoClic: TipoClick,
    variantId: string | null,
  ) =>
    dispatchProductEvent({
      event: EventType.SelectItem,
      product,
      tipoClic,
      variantId,
    });

  const dispatchViewItemListEvent = (products: ProductPLP[]) =>
    dispatchProductEvent({ event: EventType.ViewItemList, product: products });

  const dispatchAddToCartEvent = (
    product: ProductPLP,
    variantId: string | null,
  ) => dispatchProductEvent({ event: EventType.AddToCart, product, variantId });

  return {
    dispatchSelectItemEvent,
    dispatchViewItemListEvent,
    dispatchAddToCartEvent,
    dispatchViewPromotionEvent,
    dispatchSelectPromotionEvent,
  };
};
