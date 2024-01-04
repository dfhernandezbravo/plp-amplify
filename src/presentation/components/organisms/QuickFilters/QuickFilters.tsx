import { useEffect, useState } from 'react';

// Components
import Carousel, { BreakPoints } from '../../molecules/Carousel';

// Styled components
import { Background, Container, Image, Item, Title } from './styles';

// Definitions
import { Props } from './types';
import { useRouter } from 'next/router';

const QuickFilters = (props: Props) => {
  // Hooks
  const router = useRouter();

  // Props
  const { filters, currentUrl, ring, onClick } = props;

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
  const [filterActive, setFilterActive] = useState<string>('');

  // Methods
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

  useEffect(() => {
    const { product } = router.query;
    if (product) {
      setFilterActive(product as string);
    }
  }, [router.query]);

  return (
    <Container>
      <Carousel center breakpoints={breakpoints} initialSlide={initialSlide}>
        {filters.map((filter, filterIndex) => {
          const { imageUrl, title, key } = filter;
          return (
            <div key={filterIndex} onClick={() => onClick?.(filter)}>
              <Item>
                <Background ring={ring} active={key === filterActive}>
                  {imageUrl && (
                    <Image
                      image={imageUrl}
                      ring={ring}
                      active={key === filterActive}
                      alt={`Filtro ${title}`}
                    />
                  )}
                </Background>
                <Title>{title}</Title>
              </Item>
            </div>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default QuickFilters;
