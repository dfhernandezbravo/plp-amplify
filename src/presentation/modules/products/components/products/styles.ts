import { LayoutOptions } from '@components/molecules/Display/types';
import { keyframes, styled } from 'styled-components';

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

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Estilos para el componente Spinner
export const SpinnerWrapper = styled.div`
  background: white;
  padding: 16px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const SpinnerElement = styled.div`
  width: 36px;
  height: 36px;
  border: 5px solid #fff;
  border-top-color: #af1212;
  border-radius: 100%;
  animation: ${spinAnimation} 1.5s linear infinite;
`;
