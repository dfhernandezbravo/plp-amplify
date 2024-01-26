import styled, { css } from 'styled-components';

export const ArrowButtonWrapper = styled.button<{
  disabled: boolean;
  position: 'right' | 'left';
  isPositionAbsolute: boolean;
}>`
  border: none;
  ${(props) =>
    props?.disabled
      ? css`
          color: rgba(16, 16, 16, 0.3);
        `
      : css`
          color: black;
        `};

  ${(props) =>
    props?.position === 'right'
      ? css`
          right: ${props.isPositionAbsolute ? '1rem' : '-3rem'};
        `
      : css`
          left: ${props.isPositionAbsolute ? '1rem' : '-3rem'};
        `};

  background: #ffffff;
  box-shadow: 0px 2px 4px 0px #2527271f;
  position: absolute;
  width: 42px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;
  z-index: 2;
  & > svg {
    width: 24px;
    height: 24px;
  }
`;
