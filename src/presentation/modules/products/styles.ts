import styled from 'styled-components';

export const ProductsLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  @media (min-width: 1025px) {
    display: flex;
    flex-direction: row;
    gap: 12px;
    max-width: 80rem;
  }
`;

export const ProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
`;
