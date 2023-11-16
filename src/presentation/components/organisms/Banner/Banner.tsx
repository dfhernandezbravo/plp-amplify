import { useEffect, useState } from 'react';

// Hooks
import cmsDateValidator from '@utils/cmsDateValidator';

// Components
import Link from '../../atoms/Link';
import Carousel from '../../molecules/Carousel';

// Styled components
import { Container, Image } from './styles';

// Definitions
import { Props, Item } from './types';

const Banner = (props: Props) => {
  // Props
  const { items, autoplay, loop, pagination, onClick } = props;

  // State
  const [filtered, setFiltered] = useState<Item[]>();

  // Methods
  const calculateFilteredItems = () => {
    const filteredItems = items.filter((item) => {
      const { startDate, endDate, isActive } = item;
      return cmsDateValidator({ startDate, endDate, isActive });
    });
    setFiltered(filteredItems);
  };

  // Effects
  useEffect(() => {
    calculateFilteredItems();
  }, [items]);

  return (
    <Container>
      {filtered && (
        <Carousel
          center
          loop={loop}
          autoplay={autoplay}
          pagination={pagination}
        >
          {filtered.map((item, key) => {
            const { url, image, title, external } = item;
            const target = external ? '_blank' : '_self';
            return (
              <Link
                key={key}
                url={url}
                target={target}
                onClick={() => onClick?.(item)}
              >
                <Image
                  src={image}
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
