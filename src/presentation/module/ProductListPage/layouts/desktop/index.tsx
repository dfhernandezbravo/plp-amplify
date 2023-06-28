import React from 'react'
import Desktop from '@components/layout/desktop';
import ProductContent from '../../section/ProductContent';
import OrderBy from '../../section/OrderByProduct';

function ProductListPageDesktop() {
    return (
        <Desktop>
          <OrderBy />
          {/* <ProductContent /> */}
        </Desktop>
    )
}

export default ProductListPageDesktop