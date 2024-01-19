import { styled } from 'styled-components';

export const FacetItemContainer = styled.div`
  padding: ${({ theme: { spacing } }) => spacing[50]} 0;
  display: flex;
  flex-direction: column;
  max-height: 252px;
  overflow: auto;
  margin-bottom: 8px;
`;

export const FaceItemButton = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  gap: ${({ theme: { spacing } }) => spacing[50]};
  align-items: center;
  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 250px;
  }
`;
