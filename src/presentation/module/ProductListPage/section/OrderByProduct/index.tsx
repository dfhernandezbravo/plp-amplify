import React from 'react'
import SelectComponent from './components/OrderBy'

function OrderByProductRender() {
  const data = [
    { label: 'Destacados' },
    { label: 'Precio más bajos' },
    { label: 'Precio más altos' },
    { label: 'Mejor descuento' },
    { label: 'Nuevos productos' }
  ]
  return (
    <SelectComponent options={data} />
  )
}

export default OrderByProductRender