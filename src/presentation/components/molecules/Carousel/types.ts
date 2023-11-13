import { ReactNode } from 'react';
import { SwiperProps } from 'swiper/react';

export type Swipe = Array<Exclude<ReactNode, boolean | null | undefined>>;

export type Props = {
  children: ReactNode[];
  loop?: boolean;
  center?: boolean;
  keyboard?: boolean;
  autoplay?: boolean;
  pagination?: boolean;
  navigation?: boolean;
  initialSlide?: number;
  slidesPerView?: number;
  slidesPerGroup?: number;
  breakpoints?: SwiperProps['breakpoints'];
};
