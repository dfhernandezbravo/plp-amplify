import Image from 'next/image';
import Mobile from '@presentation/components/layout/mobile/index';
import ContentView from '../../section/OrderByProduct/components/ContentView';
import ProductContent from '../../section/ProductContent';
import OrderByProductMobile from '../../section/OrderByProduct'
import OrderByMobile from '../../section/OrderByProduct/'
//styles
import {
  TitleContentViewMobileContainer,
  OrderByFilterContainerMobile
} from './styles';

const ProductListPageMobile = () => {
  return (
    <Mobile>
      <TitleContentViewMobileContainer>
        <p>Departament</p>
        <ContentView />
      </TitleContentViewMobileContainer>
      <OrderByFilterContainerMobile>
        <div>
          <OrderByProductMobile />
        </div>
        <div>
          <div>
            <Image
              src={`/images/icons/filter.svg`}
              alt={''}
              width={20}
              height={20}
            />
          <p>Filtrar</p>
          </div>
        </div>
      </OrderByFilterContainerMobile>
      <ProductContent />
    </Mobile>
  )
}

export default ProductListPageMobile