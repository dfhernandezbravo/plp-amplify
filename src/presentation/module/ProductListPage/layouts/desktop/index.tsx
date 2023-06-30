import React from 'react'
import Desktop from '@components/layout/desktop';
import ProductContent from '../../section/ProductContent';
import OrderBy from '../../section/OrderByProduct';

//styles 
import { Container } from './styles';


function ProductListPageDesktop() {
  return (
    <Desktop>
      <Container>
        <OrderBy />
        <ProductContent />
      </Container>
    </Desktop>
  )
}

export default ProductListPageDesktop