import { styled } from 'styled-components';

export const PlpContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme: { spacing } }) => spacing[200]};
`;
