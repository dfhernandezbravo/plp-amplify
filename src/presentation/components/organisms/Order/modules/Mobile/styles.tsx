import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 0;
  grid-template-areas:
    'text text text display'
    'buttons buttons buttons buttons';
`;

export const TextArea = styled.div`
  grid-area: text;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0 0.5rem 1rem;
  line-height: 1.2rem;

  strong {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
  }

  span {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #818180;
    font-size: 12px;
    width: 100%;
  }
`;

export const DisplayArea = styled.div`
  grid-area: display;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0.5rem 1rem;
`;

export const ButtonBoxContainer = styled.div`
  grid-area: buttons;
  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
  }
  &.fixed-header {
    top: 115px;
    transition: all 1s ease;
  }
`;

export const BottomSheetPositionStyles = createGlobalStyle`
  div[isopen="true"][isdragging] {
   z-index: 1;
  }
`;
export const RadioButtonContainer = styled.div`
  margin: 0.5rem 0;
  font-size: 1rem;
`;
export const SortByTitle = styled.div`
  color: #485760;
  font-size: 1rem;
  margin: 0.9375rem 0;
  font-weight: 700;
  span {
    font-weight: normal;
  }
`;
