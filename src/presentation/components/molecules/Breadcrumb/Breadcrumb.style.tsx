import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  color: #818180;
  font-size: 12px;

  span {
    font-size: 10px;
  }

  a {
    color: #818180;
    &:last-child {
      color: black;
      font-weight: bold;
    }
  }
`;
