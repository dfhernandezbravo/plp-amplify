import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 0.5rem;
  min-width: 340px;
  .select-order {
    width: 200px;
  }
`;

export const Text = styled.p`
  font-weight: bold;
`;
