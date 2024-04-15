import styled from 'styled-components';

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 1025px) {
    display: flex;
    flex-direction: row;
    gap: 12px;
  }
`;

export const ProductListContainer = styled.div`
  display: flex;
  gap: 12px;
  flex: 1;
`;
