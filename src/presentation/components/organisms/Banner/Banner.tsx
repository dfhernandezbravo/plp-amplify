import { useDevice } from '@cencosud-ds/easy-design-system';
import Link from '../../atoms/Link';
import Carousel from '../../molecules/Carousel';
import { Container, Image } from './styles';
import { Props } from './types';
import { useDispatchProductEvent } from '@use-cases/product/dispatch-product-event';

const Banner = (props: Props) => {
  const { items, autoplay, loop, pagination, onClick } = props;
  const { device } = useDevice();
  const { dispatchSelectPromotionEvent } = useDispatchProductEvent();

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
                  dispatchSelectPromotionEvent(item, device);
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
