import FacetMobileContext from '@modules/products/components/facets/context/facets-context-mobile';
import PLPContext from '@presentation/context/plp-context';
import { useContext } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { FacetItemButtonMobile, FacetsListContainer } from './styles';

const FacetListMobile = () => {
  const { facets } = useContext(PLPContext);
  const { setFacet } = useContext(FacetMobileContext);

  return (
    <FacetsListContainer>
      {facets.map(
        (facet) =>
          !facet.key.includes('category') && (
            <div key={facet.key}>
              <FacetItemButtonMobile onClick={() => setFacet(facet)}>
                <span>{facet.name}</span>
                <AiOutlineRight size={24} />
              </FacetItemButtonMobile>
            </div>
          ),
      )}
    </FacetsListContainer>
  );
};

export default FacetListMobile;
