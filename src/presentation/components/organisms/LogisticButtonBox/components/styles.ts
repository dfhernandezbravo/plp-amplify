import styled from 'styled-components';

export const FacetWrapper = styled.div`
  .logistic-facet-switch {
    justify-content: space-between;
  }

  div > label {
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    text-align: left;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme?.colors?.neutral?.[800]};
  }
`;
