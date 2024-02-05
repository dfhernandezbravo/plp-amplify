import styled, { css } from 'styled-components';

export type BackgroundStruct = {
  $ring?: boolean;
  $active?: boolean;
  $indicator?: boolean;
};

export type ItemImage = {
  $padding?: number;
  $image?: string;
  $alt?: string;
} & BackgroundStruct;

export const Container = styled.div`
  margin: 0;
`;

export const Image = styled.div<ItemImage>`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-image: ${(props) => `url(${props.$image})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 50px;
  height: 50px;
  ${(props) => {
    if (props.$active) {
      return css`
        filter: invert(100%) sepia(100%) saturate(0) hue-rotate(2deg)
          brightness(109%) contrast(101%);
      `;
    }
    return css``;
  }};
`;

export const Background = styled.div<BackgroundStruct>`
  margin: 0;
  display: flex;
  border-radius: 50%;
  padding: 15px;
  background-color: #fff;
  &:hover {
    background-color: #990a06;
    > * {
      filter: invert(100%) sepia(100%) saturate(0) hue-rotate(2deg)
        brightness(109%) contrast(101%);
    }
  }

  ${(props) => {
    if (props.$active) {
      return css`
        background-color: #990a06;
      `;
    }
    return css``;
  }};
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
`;

export const Title = styled.span`
  width: auto;
  margin-top: 0.5rem;
  text-align: center;
  max-width: 110px;
  height: 50px;
  cursor: pointer;
  font-size: 16px;
  @media (max-width: 640px) {
    font-size: 13px;
  }
`;
