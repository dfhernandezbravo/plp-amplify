import FacetMobileContext from '@modules/plp-standard/components/facets/context/facets-context-mobile';
import { useAppSelector } from '@store/hooks';
import { useContext } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { FacetItemButtonMobile, FacetsListContainer } from './styles';

const FacetListMobile = () => {
  const { facets } = useAppSelector((state) => state.products);
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