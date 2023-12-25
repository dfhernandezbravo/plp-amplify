import { Button } from '@cencosud-ds/easy-design-system';
import useQueryParams from '@hooks/use-query-params';
import { useAppDispatch } from '@store/hooks';
import { setOpenFacetsMobile } from '@store/slices/products';
import { useContext, useEffect, useState } from 'react';
import FacetMobileContext from '../../context/facets-context-mobile';
import { FacetButtonsContainer } from './styles';

const FacetButtons = () => {
  const dispatch = useAppDispatch();
  const { updateQueryParams } = useQueryParams();
  const { filters, setFilters } = useContext(FacetMobileContext);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (filters.length) {
      setQuantity(
        filters.reduce(
          (accumulator, current) => accumulator + current.quantity,
          0,
        ),
      );
    } else {
      setQuantity(0);
    }
  }, [filters]);

  const handleOnClick = () => {
    dispatch(setOpenFacetsMobile(false));
    if (filters.length) {
      let newFilter = '';
      filters.forEach((filter) => {
        newFilter += `${filter.key}/${filter.value}/`;
      });
      updateQueryParams({ filter: newFilter });
    } else {
      updateQueryParams({ filter: '' });
    }
  };

  return (
    <FacetButtonsContainer>
      <Button
        variant="link"
        label="Borrar Filtros"
        size="compact"
        onClick={() => setFilters([])}
      />
      <Button
        variant="primary"
        size="compact"
        label={`${quantity > 0 ? `(${quantity})` : ''} Ver Productos`}
        onClick={handleOnClick}
      />
    </FacetButtonsContainer>
  );
};

export default FacetButtons;
