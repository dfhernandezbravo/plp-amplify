import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FacetsTagsHeader = styled.div`
  color: #4d4d4d;
  font-size: 14px;
  font-weight: 700;
  text-transform: inherit;
`;

export const Tag = styled.div`
  width: fit-content;
  display: flex;
  justify-content: space-between;
  padding: 6px;
  background-color: #f1f1f1;
  border-radius: 6px;
  align-items: center;
  margin-bottom: 10px;
  margin-right: 6px;
`;

export const TagText = styled.div`
  color: #1a1a1a;
  font-weight: 600;
  font-size: 14px;
`;

export const TagClose = styled.div`
  cursor: pointer;
  margin: 0px 6px 0 6px;
`;
