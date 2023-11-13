import NextImage, { ImageProps } from 'next/image';
import styled, { css } from 'styled-components';

export type Background = {
  ring?: boolean;
  active?: boolean;
  indicator?: boolean;
};

export type ItemImage = {
  padding?: number;
} & Background &
  ImageProps;

export const Container = styled.div`
  margin: 0;
  padding: 1rem 0;
`;

export const Image = styled(NextImage)<ItemImage>`
  margin: 0;
  border-radius: 50%;
  ${(props) =>
    props.padding
      ? css`
          padding: ${props.padding}px;
        `
      : css`
          padding: 0;
        `}
  ${(props) =>
    props.active &&
    props.indicator &&
    css`
      filter: invert(100%) sepia(100%) saturate(0) hue-rotate(2deg)
        brightness(109%) contrast(101%);
    `};
`;

export const Background = styled.div<Background>`
  margin: 0;
  padding: 0;
  display: flex;
  border-radius: 50%;
  ${(props) =>
    props.ring && props.active
      ? css`
          border: 2px solid #990a06;
        `
      : css`
          border: 2px solid #fff;
        `};
  ${(props) =>
    props.indicator && props.active
      ? css`
          background-color: #990a06;
        `
      : css`
          background-color: #fff;
        `};
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.span`
  width: auto;
  font-size: 1rem;
  margin-top: 0.5rem;
  text-align: center;
`;
