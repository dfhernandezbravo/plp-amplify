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
  const onFilterChange = (order: Order) => onChange?.({ order });
  const onDisplayChange = (layout: Layout) => onChange?.({ layout });

  return (
    <Container>
      <Filter
        onChange={onFilterChange}
        defaultValue={defaultQueryParams?.order}
      />
      <Display
        onChange={onDisplayChange}
        defaultValue={defaultQueryParams?.layout}
      />
    </Container>
  );
};

export default Desktop;
