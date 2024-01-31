import styled from 'styled-components';

export const Container = styled.div`
  label {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    input[type='radio'] {
      display: none;
    }
  }
`;
