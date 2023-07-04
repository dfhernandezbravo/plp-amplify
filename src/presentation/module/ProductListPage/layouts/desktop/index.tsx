import React from 'react'
import Desktop from '@components/layout/desktop';
import ProductContent from '../../section/ProductContent';
import OrderBy from '../../section/OrderByProduct';
import ContentView from '../../section/OrderByProduct/components/ContentView';
import CarouselCategories from '../../section/CarouselCategoies'
//styles 
import {
  Container,
  OrderByViewList
} from './styles';


function ProductListPageDesktop() {
  return (
    <Desktop>
      <Container>
        <CarouselCategories />
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