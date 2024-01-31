import styled, { css } from 'styled-components';

type PageProps = {
  active?: boolean;
};
export const PaginationContainer = styled.div`
  margin: 16px 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ButtonsContainer = styled.ul`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 267px;
`;

export const Page = styled.li<PageProps>`
  list-style-type: none;
  border-radius: 50%;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  span {
    font-weight: 600;
    width: 20px;
    height: 20px;
    text-align: center;
  }
  &:hover {
    border: 1px solid #4d4d4d;
  }
  ${(props) => {
    if (props.active) {
      return css`	
                background-color: #4d4d4d;
                color: #fff;
            }`;
    }
    return css``;
  }}
`;

export const PaginatorNav = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
