import { Content } from '@entities/cms';
import { useAppSelector } from '@store/hooks';
import { useDispatchProductEvent } from '@use-cases/product/dispatch-product-event';
import React, { useEffect } from 'react';
interface Props {
  children: React.ReactNode;
  contentCMS: Content[];
}
const AnalyticsEventsLayout = ({ children, contentCMS }: Props) => {
  const { dispatchViewPromotionEvent } = useDispatchProductEvent();
  const { deviceType } = useAppSelector((state) => state.device);

  useEffect(() => {
    if (!deviceType) return;
    if (!contentCMS?.length) return;
    const bannerCarousel = contentCMS?.find(
      (content) => content.component === 'banner-carousel',
    );
    if (bannerCarousel?.items) {
      for (const item of bannerCarousel.items) {
        dispatchViewPromotionEvent(item, deviceType);
      }
    }
  }, [contentCMS]);
  return <>{children}</>;
};

export default AnalyticsEventsLayout;
