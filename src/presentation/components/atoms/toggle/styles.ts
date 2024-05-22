import styled from 'styled-components';

export const ToggleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 16px;
  cursor: pointer;
`;

export const ToggleStyled = styled.div<{ checked: boolean }>`
  width: 2rem;
  min-width: 2rem;
  height: 1rem;
  background-color: ${({ checked, theme }) =>
    checked ? theme?.colors?.success?.[600] : theme?.colors?.neutral?.[600]};
  position: relative;
  border-radius: 1.5rem;
  display: flex;
  padding: 2px;
  margin-top: 3px;
  box-sizing: border-box;
`;

export const CheckboxStyled = styled.input.attrs({ type: 'checkbox' })`
  &[type='checkbox'] {
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    cursor: pointer;
  }
`;

export const TogglerStyled = styled.div<{ checked: boolean }>`
  background-color: #fff;
  border-radius: 50%;
  height: 100%;
  width: 50%;
  transform: translateX(${({ checked }) => (checked ? '100%' : 0)});
  transition: all 0.3s ease-in-out;
`;
