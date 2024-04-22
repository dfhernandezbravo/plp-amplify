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
  cursor: pointer;
`;

export const ShowMoreButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  width: fit-content;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-decoration: underline;
  padding: 8px 16px 8px 4px;
`;
