import { Children, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, Pagination, Autoplay } from 'swiper/modules';

// Styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Styled components
import { Container } from './styles';

// Definitions
import { Props, Swipe } from './types';

const Carousel = (props: Props) => {
  // Props
  const {
    loop = false,
    center = false,
    keyboard = false,
    autoplay = false,
    pagination = false,
    navigation = false,
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
        keyboard={{ enabled: keyboard }}
        pagination={{ enabled: pagination, clickable: true }}
        modules={[Keyboard, Navigation, Pagination, Autoplay]}
      >
        {swipes?.map((swipe, index) => (
          <SwiperSlide key={index}>{swipe}</SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Carousel;
