import Link from '../../atoms/Link';
import Carousel from '../../molecules/Carousel';
import { Container, Image } from './styles';
import { Props } from './types';
import { useDispatchProductEvent } from '@use-cases/product/dispatch-product-event';
import useRedirectLink from '@hooks/use-redirect-link';
import { useAppSelector } from '@store/hooks';
import useDevice from '@hooks/use-device';

const Banner = (props: Props) => {
  const { items, autoplay, loop, pagination, onClick } = props;
  const { device } = useDevice();
  const { dispatchSelectPromotionEvent } = useDispatchProductEvent();
  const { redirect } = useRedirectLink();
  const { deviceType } = useAppSelector((state) => state.device);

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
                url={redirect(link)}
                onClick={() => {
                  dispatchSelectPromotionEvent(item, deviceType);
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
