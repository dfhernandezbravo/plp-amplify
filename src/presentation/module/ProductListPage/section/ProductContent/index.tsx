import React, { useState, useEffect } from 'react'
import productDataMock from '../../../../mocks/productDataMock.json'
import { ProductModel } from '../../components/productCard/productModel.types'
import { ProductCard } from '../../components/productCard'
import { GalleryContainer } from './productContent.style'


function ProductContent() {

  const [productData, setProductData] = useState<ProductModel[] | null>([])

  useEffect(() => {
    setProductData(productDataMock as unknown as ProductModel[] | null);
  })

  const onAddToCart = () => {
    console.log('add to cart')
  }

  if (!productData) {
    return <span>Loading...</span>
  }


  console.log(productData)
  return (
    <GalleryContainer>
      {
        productData && productData.map((product: ProductModel) => {

          return (
            <ProductCard product={product} onAddToCart={onAddToCart} />
          )
        })
      }
    </GalleryContainer>
  )
}

export default ProductContent