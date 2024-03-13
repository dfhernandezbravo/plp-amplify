import styled from 'styled-components';

export const AccordionContainer = styled.div`
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.neutral.main};
  margin: ${({ theme: { spacing } }) => spacing[50]} 0;
  width: 100%;
`;

export const HeaderAccordion = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme: { spacing } }) => spacing[150]} 0;
  cursor: pointer;
  font-size: ${({ theme: { fontSize } }) => fontSize[300]};
  font-weight: 700;
  text-transform: inherit;
  width: 100%;
  color: #363f45;
`;
