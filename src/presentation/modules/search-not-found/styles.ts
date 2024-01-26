import styled from 'styled-components';

export const SearchNotFoundContainer = styled.div`
  width: 100%;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 24px;
    padding: 12px;

    @media (min-width: 1024px) {
      width: 80rem;
    }
  }

  .title {
    font-size: 18px;
    font-weight: 600;
    line-height: 20px;
    font-family: 'Open Sans', sans-serif;
    color: #363f45;

    @media (min-width: 1024px) {
      text-align: left;
    }
  }
`;
