import styled from 'styled-components';

export const LogisticFacetsContainer = styled.div`
  padding: 0.75rem;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.neutral.main};

  @media (max-width: 768px) {
    border-bottom: none;
  }
`;

export const FacetsContainer = styled.div``;

export const TitleHeader = styled.h2`
  font-size: ${({ theme: { fontSize } }) => fontSize[300]};
  font-weight: 700;
  text-transform: inherit;
  color: #363f45;

  &::first-letter {
    text-transform: uppercase;
  }
`;
