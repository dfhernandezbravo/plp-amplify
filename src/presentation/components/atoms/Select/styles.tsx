import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme: { spacing } }) => spacing?.[100]};

  & label {
    font-size: ${({ theme: { fontSize } }) => fontSize?.[100]};
  }

  @media screen and (max-width: 768px) {
    min-width: 215px;
  }
`;
