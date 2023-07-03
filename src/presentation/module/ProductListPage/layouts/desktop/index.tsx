import React from 'react'
import Desktop from '@components/layout/desktop';
import ProductContent from '../../section/ProductContent';
import OrderBy from '../../section/OrderByProduct';
import ContentView from '../../section/OrderByProduct/components/ContentView';

//styles 
import {
  Container,
  OrderByViewList
} from './styles';


function ProductListPageDesktop() {
  return (
    <Desktop>
      <Container>
        <OrderByViewList>
          <OrderBy />
          <ContentView />
        </OrderByViewList>
        <ProductContent />
      </Container>
    </Desktop>
  )
}

export default ProductListPageDesktop