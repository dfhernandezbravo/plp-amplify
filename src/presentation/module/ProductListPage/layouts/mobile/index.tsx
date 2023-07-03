
import Mobile from '@presentation/components/layout/mobile/index';
import ContentView from '../../section/OrderByProduct/components/ContentView';
import ProductContent from '../../section/ProductContent';
import OrderByProduct from '../../section/OrderByProduct'
//styles
import { TitleContentViewMobileContainer } from './styles';

const ProductListPageMobile = () => {
  return (
    <Mobile>
        <TitleContentViewMobileContainer>
            <p>Departament</p>
            <ContentView/>
        </TitleContentViewMobileContainer>
        <OrderByProduct />
        <ProductContent/>
    </Mobile>
  )
}

export default ProductListPageMobile