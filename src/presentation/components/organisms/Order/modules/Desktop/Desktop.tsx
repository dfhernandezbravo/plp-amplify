// Components
import Filter, { Order } from '../../../../molecules/Filter';
import Display, { Layout } from '../../../../molecules/Display';

// Styled components
import { Container } from './styles';

// Definitions
import { Props } from '../../types';

const Desktop = (props: Props) => {
  // Props
  const { onChange, queryParams } = props;

  // Methods
  const onFilterChange = (order: Order) => onChange({ order });
  const onDisplayChange = (layout: Layout) => onChange({ layout });

  return (
    <Container>
      <Filter onChange={onFilterChange} defaultValue={queryParams?.order} />
      <Display
        isShowText
        onChange={onDisplayChange}
        defaultValue={queryParams?.layout}
      />
    </Container>
  );
};

export default Desktop;
