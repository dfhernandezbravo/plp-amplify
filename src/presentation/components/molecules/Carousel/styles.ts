import styled from 'styled-components';

export const Container = styled.section`
  --swiper-theme-color: #000;
  --swiper-navigation-size: 20px;
  --swiper-navigation-sides-offset: 3px;
  --swiper-pagination-color: rgb(204, 21, 21);

  .swiper {
    z-index: 0;
  }

  .swiper-wrapper {
    width: 200px;
    z-index: 0;
  }

  width: 100%;
  padding: 0;
  position: relative;
  box-sizing: border-box;

  .swiper-button-prev::after,
  .swiper-button-next::after {
    z-index: 1;
  }

  .swiper-button-prev::before,
  .swiper-button-next::before {
    content: '';
    background-color: ${({ theme }) => theme?.colors?.neutral?.[200]};
    position: absolute;
    height: 300px;
    width: 1.3rem;
  }

  .swiper-button-prev::before {
    left: -3px;
  }
  .swiper-button-next::before {
    right: -4px;
  }

  /*
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    &.swiper-pagination-bullet-active {
      width: 33px;
    }
  }
  */
`;
