import { Children, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, Scrollbar } from 'swiper/modules';

// Styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/keyboard';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

// Styled components
import { Container } from './styles';

// Definitions
import { Props, Swipe } from './types';

const Carousel = (props: Props) => {
  // Props
  const {
    loop,
    center,
    autoplay,
    pagination,
    navigation,
    slidesPerView,
    slidesPerGroup,
    initialSlide,
    breakpoints,
    children,
  } = props;

  // States
  const [key, setKey] = useState<number>(0);
  const [swipes, setSwipes] = useState<Swipe>();

  // Methods
  const getSwipes = () => setSwipes(Children.toArray(children));

  // Effects
  useEffect(() => {
    getSwipes();
  }, [children]);

  useEffect(() => {
    setKey((prev) => ++prev);
  }, [initialSlide]);

  return (
    <Container>
      <Swiper
        key={key}
        loop={loop}
        autoplay={autoplay}
        navigation={navigation}
        breakpoints={breakpoints}
        initialSlide={initialSlide}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
        centerInsufficientSlides={center}
        pagination={{ clickable: pagination }}
        modules={[Keyboard, Scrollbar, Navigation]}
        keyboard={{ enabled: true }}
      >
        {swipes?.map((swipe, index) => (
          <SwiperSlide key={index}>{swipe}</SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Carousel;
