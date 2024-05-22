import styled from 'styled-components';

export const FacetWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .logistic-facet-switch {
    width: 60%;
    justify-content: space-between;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  div > label {
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    text-align: left;
    color: ${({ theme }) => theme?.colors?.neutral?.[800]};
  }
`;
