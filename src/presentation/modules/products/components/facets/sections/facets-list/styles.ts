import { styled } from 'styled-components';

export const FacetsListContainer = styled.div`
  padding: ${({ theme: { spacing } }) => spacing[50]};
  flex: 1;
`;

export const FacetItemButtonMobile = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.neutral[200]};
  width: 100%;
  padding: ${({ theme: { spacing } }) => spacing[150]};
  span {
    font-weight: bold;
  }
`;
