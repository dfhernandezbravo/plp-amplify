import styled, { css } from 'styled-components';

export const LogisticButtonBoxWrapper = styled.div<{ $onlyOne: boolean }>`
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  padding: 1rem;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2);

  ${({ $onlyOne }) =>
    !$onlyOne &&
    css`
      display: flex;
      justify-content: space-between;
      gap: 1rem;
    `}
`;
