import styled, { keyframes } from 'styled-components';

const animationModal = keyframes`
   0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
`;

export const FacetsContainerMobile = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100dvh;
  background-color: white;
  animation-name: ${animationModal};
  animation-duration: 0.5s;
  z-index: 999;
  padding: 0 ${({ theme: { spacing } }) => spacing[100]};
`;

export const HeaderSection = styled.div`
  background-color: white;
  height: 10%;
`;

export const ContentSection = styled.div`
  height: 80%;
  overflow: auto;
`;

export const ButtonSection = styled.div`
  height: 10%;
`;
