import LocationIcon from '../../icons/location-icon';
import { FacetsRegionalizerWrapper } from './styles';
import { useAppDispatch } from '@store/hooks';
import { useRegionalizer } from '../../../../hooks/use-regionalizer';
import useDevice from '@hooks/use-device';
import { setOpenFacetsMobile } from '@store/slices/products';
const FacetsRegionalizer = () => {
  const dispatch = useAppDispatch();
  const { device } = useDevice();
  const { openRegionalizer, location } = useRegionalizer();

  const handleOpenRegionalizer = () => {
    if (device === 'Phone' || device === 'Tablet')
      dispatch(setOpenFacetsMobile(false));

    openRegionalizer();
  };

  return (
    <FacetsRegionalizerWrapper onClick={handleOpenRegionalizer}>
      <LocationIcon /> {location || 'Ingresa tu ubicación'}
    </FacetsRegionalizerWrapper>
  );
};

export default FacetsRegionalizer;
