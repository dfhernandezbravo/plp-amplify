import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 12px;
  grid-auto-flow: row;
  grid-template-areas:
    'promotional-ribbons'
    'breadcrumb'
    'banner-carousel'
    'order'
    'quickfilters'
    'products'
    'pagination'
    'promotional-text';
  overflow-y: hidden;
`;
