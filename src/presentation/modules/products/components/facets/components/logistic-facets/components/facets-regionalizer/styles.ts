import styled from 'styled-components';

export const FacetsRegionalizerWrapper = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  text-decoration: underline;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  text-align: center;
  color: ${({ theme }) => theme?.colors?.info?.[600]};
  font-family: Open Sans;
  margin: 1rem 0;
  gap: 0.5rem;
  padding: 0;
  margin-left: -3px;

  :hover {
    color: red;
  }
`;
