import { useEffect, useState } from 'react';
import Carousel, { BreakPoints } from '../../molecules/Carousel';
import { Background, Container, Image, Item, Title } from './styles';
import { Props } from './types';

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
const QuickFilters = (props: Props) => {
  const { filters, currentUrl, ring, onClick } = props;
  const [initialSlide, setInitialSlide] = useState<number>(0);

  const calculateInitialSlide = () => {
    if (currentUrl) {
      const index = filters.findIndex(
        (filter) => filter.redirectTo === currentUrl,
      );
      setInitialSlide(index);
    }
  };

  const isActive = (redirectTo: string) =>
    redirectTo === decodeURIComponent(currentUrl) ||
    decodeURIComponent(redirectTo) === decodeURIComponent(currentUrl);

  useEffect(() => {
    calculateInitialSlide();
  }, [filters, currentUrl]);

  return (
    <Container>
      <Carousel
        navigation
        center
        breakpoints={breakpoints}
        initialSlide={initialSlide}
      >
        {filters.map((filter, filterIndex) => {
          const { image, title, redirectTo } = filter;
          return (
            <div key={filterIndex} onClick={() => onClick(filter)}>
              <Item>
                <Background $ring={ring} $active={isActive(redirectTo)}>
                  {image && (
                    <Image
                      $image={image}
                      $ring={ring}
                      $active={isActive(redirectTo)}
                      $alt={`Filtro ${title}`}
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
