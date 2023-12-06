import styled from 'styled-components';

// Components
import { Props } from '@components/atoms/Button';

// Definitions
export type ContainerStruct = {
  area?: string;
};

export type CustomButtonStruct = {
  area?: string;
} & Props;

export const Container = styled.section<ContainerStruct>`
  width: 100%;
  display: grid;
  grid-column-gap: 0;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2);
  grid-row-gap: 0;
  ${(props) => {
    const { area } = props;
    if (area) return `grid-area: ${props.area};`;
  }}
`;

export const CustomButton = styled.button<CustomButtonStruct>`
  cursor: pointer;
  font-weight: bold;
  gap: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-top: 1px solid rgb(216, 216, 216);
  border-bottom: 1px solid rgb(216, 216, 216);
  border-left: 1px solid rgb(216, 216, 216);
  border-right: none;
  &:last-child {
    border-right: 1px solid rgb(216, 216, 216);
  }
`;
