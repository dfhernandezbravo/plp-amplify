import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 0;
  grid-template-areas:
    'text text text display'
    'buttons buttons buttons buttons';
`;

export const TextArea = styled.div`
  grid-area: text;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0 0.5rem 1rem;
  line-height: 1.2rem;

  strong {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
  }

  span {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #818180;
    font-size: 12px;
    width: 100%;
  }
`;

export const DisplayArea = styled.div`
  grid-area: display;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0.5rem 1rem;
`;
