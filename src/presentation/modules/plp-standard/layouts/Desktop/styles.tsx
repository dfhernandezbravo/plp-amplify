import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  max-width: 80rem;
  margin-bottom: 1rem;
  grid-template-rows: auto auto auto auto auto 1fr auto;
  gap: 12px;
  grid-auto-flow: row;
  grid-template-areas:
    'promotional-ribbons promotional-ribbons promotional-ribbons promotional-ribbons promotional-ribbons promotional-ribbons'
    '. breadcrumb breadcrumb breadcrumb breadcrumb .'
    '. banner-carousel banner-carousel banner-carousel banner-carousel .'
    '. facets order order order .'
    '. facets quickfilters quickfilters quickfilters .'
    '. facets products products products .'
    '. facets promotional-text promotional-text promotional-text .';
`;
