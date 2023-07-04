import useBreakpoints from '@presentation/components/hooks/useBreakpoints';
import SelectComponentDesktop from './components/OrderBy/OrderByDesktop'
import SelectComponentMobile from './components/OrderBy/OrderByMobile';


function OrderByProductRender() {

  const { isMd, isLg  } = useBreakpoints();
  const data = [
    { label: 'Destacados' },
    { label: 'Precio más bajos' },
    { label: 'Precio más altos' },
    { label: 'Mejor descuento' },
    { label: 'Nuevos productos' }
  ]
  return (
    <>
      {
        isMd  || isLg ? <SelectComponentDesktop options={data} /> : <SelectComponentMobile options={data} />
      }
    </>
  )
}

export default OrderByProductRender