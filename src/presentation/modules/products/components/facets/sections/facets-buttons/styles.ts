import styled from 'styled-components';

export const FacetButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme: { spacing } }) => spacing[100]};
`;
