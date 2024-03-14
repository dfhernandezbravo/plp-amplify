import { useDevice } from '@cencosud-ds/easy-design-system';
import Link from '../../atoms/Link';
import Carousel from '../../molecules/Carousel';
import { Container, Image } from './styles';
import { Props } from './types';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUserNavigation } from '@modules/plp-standard/components/products/hooks/useUserNavigation';
import { useDispatchProductEvent } from '@use-cases/product/dispatch-product-event';

const Banner = (props: Props) => {
  const { items, autoplay, loop, pagination, onClick } = props;
  const { device } = useDevice();
  const router = useRouter();
  const { setRoutesNavigated } = useUserNavigation();
  const { dispatchViewPromotionEvent, dispatchSelectPromotionEvent } =
    useDispatchProductEvent();

  useEffect(() => {
    if (!router) return;
    setRoutesNavigated((prev) => {
      const routePath = prev.find((route) => route === router.asPath);
      if (!routePath) {
        for (const item of items) {
          dispatchViewPromotionEvent(item);
        }
        return [...prev, router.asPath];
      }
      return prev;
    });
  }, [router]);

  return (
    <Container>
      {items && (
        <Carousel
          center
          loop={loop}
          autoplay={autoplay}
          pagination={pagination}
        >
          {items.map((item, key) => {
            const { link, image, title, mobileImage } = item;
            return (
              <Link
                key={key}
                url={link}
                onClick={() => {
                  dispatchSelectPromotionEvent(item);
                  onClick?.(item);
                }}
              >
                <Image
                  src={device === 'Desktop' ? image || '' : mobileImage || ''}
                  alt={`Banner ${title}`}
                  width={1920}
                  height={350}
                  loading="lazy"
                />
              </Link>
            );
          })}
        </Carousel>
      )}
    </Container>
  );
};

export default Banner;
