import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  gap: 8px;
`;

export const TitleHeader = styled.h1`
  font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
  font-size: ${({ theme: { fontSize } }) => fontSize[600]};
  font-weight: 700;
  padding: none;
  margin: 0;
  letter-spacing: 0;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const TextBreadcrumb = styled.span`
  font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
  font-size: ${({ theme: { fontSize } }) => fontSize[100]};
  color: #4d4d4d;
  padding: 0;
  margin: 0;
  letter-spacing: 0;
  clear: both;
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const TextRecords = styled.span`
  font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
  font-size: ${({ theme: { fontSize } }) => fontSize[100]};
  font-weight: 400;
  color: #979899;
  display: block;
  padding: 0;
  margin: 0;
  letter-spacing: 0;
  width: fit-content;
`;
