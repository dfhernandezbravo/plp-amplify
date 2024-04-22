import { useAppDispatch } from '@store/hooks';
import { setOpenFacetsMobile } from '@store/slices/products';
import { useContext } from 'react';
import { AiOutlineArrowLeft, AiOutlineClose } from 'react-icons/ai';
import FacetMobileContext from '../../../context/facets-context-mobile';
import {
  ButtonHeader,
  FacetsHeaderMobileContainer,
  TitleHeader,
} from './styles';

const FacetsHeaderMobile = () => {
  const dispatch = useAppDispatch();
  const { facet, setFacet } = useContext(FacetMobileContext);

  return (
    <FacetsHeaderMobileContainer>
      {facet && (
        <ButtonHeader onClick={() => setFacet(null)}>
          <AiOutlineArrowLeft size={24} />
        </ButtonHeader>
      )}

      <TitleHeader>
        <span>{facet ? facet.name : 'Filtrar Productos'}</span>
      </TitleHeader>

      <ButtonHeader onClick={() => dispatch(setOpenFacetsMobile(false))}>
        <AiOutlineClose size={24} />
      </ButtonHeader>
    </FacetsHeaderMobileContainer>
  );
};

export default FacetsHeaderMobile;
