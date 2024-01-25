import Link from 'next/link';
import styled from 'styled-components';

export const NoSuggestionsContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid #b4c2cb;
  border-radius: 16px;
  display: flex;
  flex-direction: column-reverse;
  gap: 16px;
  padding: 16px;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const PopularSearchesContainer = styled.div`
  padding: 0px 16px;
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 1024px) {
    border-right: 1px solid #b4c2cb;
  }

  .title {
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    font-family: 'Open Sans', sans-serif;
    color: #363f45;
  }
`;

export const LinkPopularSearch = styled(Link)`
  text-decoration: none;
  color: #485760;
  font-size: 14px;
  font-weight: 400px;
  line-height: 18px;
`;

export const NoSuggestionMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 24px;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .message {
    text-align: center;

    @media (min-width: 1024px) {
      text-align: left;
      max-width: 400px;
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
