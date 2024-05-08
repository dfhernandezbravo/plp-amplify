import styled from 'styled-components';

// Components

// Definitions
export type ContainerStruct = {
  area?: string;
};

export type CustomButtonStruct = {
  area?: string;
};

export const Container = styled.section<ContainerStruct>`
  position: relative;
  width: 100%;
  height: 52px;
  display: grid;
  grid-column-gap: 0;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
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
  border-bottom: 1px solid rgb(216, 216, 216);
  position: relative;

  &:last-child::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 15%;
    top: 15%;
    width: 1px;
    height: 70%;
    background-color: rgb(216, 216, 216);
  }
`;
