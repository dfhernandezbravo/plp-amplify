import styled from 'styled-components';

// Component
import Link, { LinkProps } from 'next/link';

export const LinkStyled = styled(Link)<LinkProps>`
  margin: 0;
  padding: 0;
  color: black;
  position: relative;
  text-transform: none;
  text-decoration: none;
`;
