import PLPContext from '@presentation/context/plp-context';
import { useAppSelector } from '@store/hooks';
import { useDispatchProductEvent } from '@use-cases/product/dispatch-product-event';
import React, { useContext, useEffect } from 'react';
interface Props {
  children: React.ReactNode;
}

const AnalyticsEventsLayout = ({ children }: Props) => {
  const { contentCMS } = useContext(PLPContext);
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
