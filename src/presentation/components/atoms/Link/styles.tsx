import styled from 'styled-components';

// Component
import Link, { LinkProps } from 'next/link';

export const LinkStyled = styled(Link)<LinkProps>`
  text-transform: none;
  text-decoration: none;
`;
