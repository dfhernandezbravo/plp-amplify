import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export const PromotionalRibbonContainer = styled(Link)<{ background?: string }>`
  width: 100%;
  height: fit-content;
  min-height: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.background};
  margin: 0;
`;

export const ImagePromotionalRibbon = styled(Image)<{ fullwidth?: boolean }>`
  width: ${(props) => (props.fullwidth ? '100%' : '77rem')};
  position: relative;
  height: auto;
  min-height: 40px;
`;
