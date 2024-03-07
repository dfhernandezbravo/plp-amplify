import styled from 'styled-components';

export const PriceInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme: { spacing } }) => spacing[100]};
  width: 100%;
  padding: 10px ${({ theme: { spacing } }) => spacing[100]};
`;

export const TextfieldPrice = styled.input`
  width: 80px;
  height: 40px;
  border-radius: 6px;
  border: 1px;
  gap: 10px;
  border: 1px solid #aaaaaa;
  padding: 0px 8px;
  font-size: 12px;
`;
