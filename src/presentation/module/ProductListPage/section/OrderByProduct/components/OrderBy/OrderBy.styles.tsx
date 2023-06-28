import styled, { css } from 'styled-components';


export const OrderByContainer = styled.div`
    display: flex;
`

export const TextOrderBy = styled.p`
  display: flex;
  align-items: center;
  padding: 5px;
  font-size: 15px;
  font-weight: bold;
  margin-right: 5px;
  &:before {
    content: '';
    background-image: url('/images/icons/sort.svg');
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
`

export const DropdownContainer = styled.div`
  & > button {
    border:none;
    background: none;
    display: flex;
    justify-content: space-between;
    width: 180px;
    border: 1px solid #aaaaaa;
    font-size: 16px;
    border-radius: 6px;
    padding: 10px;
    cursor: pointer;
  }

`

export const SelectContainer = styled.div`
    position: absolute;
    top: 50px;
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid #aaaaaa;
    min-width: 185px;
    max-width: fit-content;
    border-radius: 0.25rem;
    box-shadow: 4px 4px 8px 0 rgba(0,0,0,.2);
`

export const SelectOption = styled.button`
  padding: 11px;
  width: 100%;
  display: flex;
  border-radius: 0.25rem;
  align-self: flex-start;
  font-size: 0.875rem;
  background: none;
  border: none;
  border-bottom: 1px solid #f2f2f2;
  cursor: pointer;
  &.selected, &:hover {
    background: #EDEDED 
  }
`


