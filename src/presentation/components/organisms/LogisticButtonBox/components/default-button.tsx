import { useRegionalizer } from '@modules/products/components/facets/hooks/use-regionalizer';
import { Toggle } from '@components/atoms/toggle/toggle';
import { FacetWrapper } from './styles';

export const DefaultButton = () => {
  const { openRegionalizer } = useRegionalizer();

  const handleOpenRegionalizer = () => {
    openRegionalizer();
  };

  return (
    <FacetWrapper
      key="envio-express-button-box"
      onClick={handleOpenRegionalizer}
    >
      <Toggle
        className="logistic-facet-switch"
        name={'Envío express'}
        checked={false}
      >
        Envío express
      </Toggle>
    </FacetWrapper>
  );
};
