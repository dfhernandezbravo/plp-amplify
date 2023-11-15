import styled from 'styled-components';

// Component
import Link, { LinkProps } from 'next/link';

export const LinkStyled = styled(Link)<LinkProps>`
  margin: 0;
  padding: 0;
  color: black;
  text-transform: none;
  text-decoration: none;
`;
