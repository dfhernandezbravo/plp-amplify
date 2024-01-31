import { LayoutOptions } from '@components/molecules/Display/types';
import { styled } from 'styled-components';

export const ProductsContainer = styled.div<{ $layout: LayoutOptions }>`
  display: ${(props) => (props.$layout === 'grid' ? 'grid' : 'flex')};
  flex-direction: column;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
