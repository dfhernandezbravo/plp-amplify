import { styled } from 'styled-components';

export const FacetsContainer = styled.div`
  height: 100%;
  background-color: #fff;
  width: 100%;
  border-radius: ${({ theme: { radius } }) => radius.sm};
  padding: ${({ theme: { spacing } }) => spacing[200]};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;