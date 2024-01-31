import NextImage, { ImageProps } from 'next/image';
import styled from 'styled-components';

// Definitions
type Item = ImageProps;

export const Container = styled.section`
  width: 100%;
  height: auto;
  position: relative;
  display: inline-block;
`;

export const Image = styled(NextImage)<Item>`
  width: 100%;
  height: auto;
  margin: 0 0 1.5rem 0;
`;
