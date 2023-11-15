import { useEffect, useState } from 'react';
import isWithinInterval from 'date-fns/isWithinInterval';

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
    const currentDate = new Date();
    const filteredItems = items.filter((item) => {
      const { startDatetime, endDatetime } = item;
      if (startDatetime && endDatetime) {
        const interval = {
          start: new Date(startDatetime),
          end: new Date(endDatetime),
        };
        return isWithinInterval(currentDate, interval);
      }
      return true;
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
