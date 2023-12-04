import { useEffect, useState } from 'react';

// Components
import Link from '../../atoms/Link';
import Carousel, { BreakPoints } from '../../molecules/Carousel';

// Styled components
import { Background, Container, Image, Item, Title } from './styles';

// Definitions
import { Props } from './types';

const QuickFilters = (props: Props) => {
  // Props
  const { filters, currentUrl, indicator, ring, onClick } = props;

  // Constants
  const breakpoints: BreakPoints = {
    320: {
      slidesPerView: 3.5,
      slidesPerGroup: 3,
    },
    768: {
      slidesPerView: 4.5,
      slidesPerGroup: 4,
    },
    1024: {
      slidesPerView: 6.5,
      slidesPerGroup: 6,
    },
  };

  // State
  const [initialSlide, setInitialSlide] = useState<number>(0);

  // Methods
  const calculateActive = (url: string) =>
    !!currentUrl && url.includes(currentUrl);
  const calculateInitialSlide = () => {
    if (currentUrl) {
      const index = filters.findIndex((filter) => filter.link === currentUrl);
      setInitialSlide(index);
    }
  };

  // Effects
  useEffect(() => {
    calculateInitialSlide();
  }, [filters, currentUrl]);

  return (
    <Container>
      <Carousel center breakpoints={breakpoints} initialSlide={initialSlide}>
        {filters.map((filter, filterIndex) => {
          const { link, image, alt } = filter;
          return (
            <Link
              key={filterIndex}
              url={link}
              onClick={() => onClick?.(filter)}
            >
              <Item>
                <Background
                  ring={ring}
                  indicator={indicator}
                  active={calculateActive(link)}
                >
                  <Image
                    src={image}
                    alt={`Filtro ${alt}`}
                    width={50}
                    height={50}
                    padding={15}
                    ring={ring}
                    indicator={indicator}
                    active={calculateActive(link)}
                    priority
                  />
                </Background>
                <Title>{alt}</Title>
              </Item>
            </Link>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default QuickFilters;