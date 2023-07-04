/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  ItemsWrapper,
  CarouselImageContainer,
  IconTitle,
  CarouselNavButton,
} from './CarouselCategories.styles.';
// import { CarouselCategoriesProps } from './CategoriesCategoies.types';
import Image from 'next/image';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from 'pure-react-carousel';
import { GrNext, GrPrevious } from 'react-icons/gr';
import useBreakpoints from '@presentation/components/hooks/useBreakpoints';

import mockItems  from '@mocks/carousel-circle-categories.json'

const CarouselCategories = () => {

  const { items } = mockItems ;

  const router = useRouter()

  console.log({router})

  // hooks
  const { isLg, isMd, isSm } = useBreakpoints();

  return (
    <ItemsWrapper>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={items.length}
        visibleSlides={isLg || isSm ? 9 : isMd ? 6 : 5}
        step={isLg || isSm ? 9 : isMd ? 6 : 5}
        orientation='horizontal'
      >
        <Slider style={{ margin: '0 auto', width: '90%', minHeight: '170px' }}>
          {items.map((item, index) => (
            <Slide key={item.title} index={index} style={{ height: '20px' }}>
              <Link href={item.link || ''}>
                <CarouselImageContainer>
                  <img
                    src={item.image || ''}
                    width={100}
                    height={100}
                    sizes="100vw"
                    alt={item.title || 'Item icon'}
                  />
                </CarouselImageContainer>
                <IconTitle>{item.title}</IconTitle>
              </Link>
            </Slide>
          ))}
        </Slider>

        <ButtonBack style={{ background: 'transparent', border: 'none' }}>
          <CarouselNavButton>
            <GrPrevious size={'25px'} />
          </CarouselNavButton>
        </ButtonBack>
        <ButtonNext style={{ background: 'transparent', border: 'none' }}>
          <CarouselNavButton right>
            <GrNext size={'25px'} />
          </CarouselNavButton>
        </ButtonNext>
      </CarouselProvider>
    </ItemsWrapper>
  );
};

export default CarouselCategories;
