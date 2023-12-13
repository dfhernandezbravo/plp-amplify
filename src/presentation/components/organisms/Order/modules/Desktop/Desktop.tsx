import { Container } from './styles';

// Definitions
import { Props } from '../../types';
import Filter from '@components/molecules/Filter';
import Display from '@components/molecules/Display';

const Desktop = (props: Props) => {
  // Props
  const { queryParams, onFilterChange, onDisplayChange } = props;

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
