// Components
import Filter, { Order } from '../../../../molecules/Filter';
import Display, { Layout } from '../../../../molecules/Display';

// Styled components
import { Container } from './styles';

// Definitions
import { Props } from '../../types';

const Desktop = (props: Props) => {
  // Props
  const { onChange, defaultQueryParams } = props;

  // Methods
  const methods = {
    onFilterChange: (order: Order) => onChange?.({ order }),
    onDisplayChange: (layout: Layout) => onChange?.({ layout }),
  };

  return (
    <Container>
      <Filter
        defaultValue={defaultQueryParams?.order}
        onChange={methods.onFilterChange}
      />
      <Display
        defaultValue={defaultQueryParams?.layout}
        onChange={methods.onDisplayChange}
      />
    </Container>
  );
};

export default Desktop;
