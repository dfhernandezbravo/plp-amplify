import { styled } from 'styled-components';

export const FacetValueButtonMobile = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.neutral[200]};
  width: 100%;
  padding: ${({ theme: { spacing } }) => spacing[150]};
  gap: ${({ theme: { spacing } }) => spacing[200]};
`;
