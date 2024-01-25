import styled from 'styled-components';

export const SearchNotFoundContainer = styled.div`
  display: flex;
  width: 100%;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  gap: 24px;

  .container {
    padding: 24px;

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
