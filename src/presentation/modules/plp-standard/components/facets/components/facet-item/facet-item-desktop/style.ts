import { styled } from 'styled-components';

export const FacetItemContainer = styled.div`
  padding: ${({ theme: { spacing } }) => spacing[50]} 0;
  display: flex;
  flex-direction: column;
`;

export const FaceItemButton = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  gap: ${({ theme: { spacing } }) => spacing[50]};
  align-items: center;
`;
