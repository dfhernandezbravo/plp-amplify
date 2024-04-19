import Link from 'next/link';
import styled from 'styled-components';

export const BreadcrumbContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  width: 100%;
  max-width: 80rem;
`;

export const BreadcrumbItem = styled(Link)<{ $isActive: boolean }>`
  font-size: 0.75rem;
  color: rgb(77, 77, 77);
  text-decoration: none;
  font-weight: ${({ $isActive }) => ($isActive ? 700 : 400)};
  text-transform: capitalize;
  cursor: pointer;
`;
