// Components
import Icon from '@components/atoms/Icon';
import Select, { Option } from '@components/atoms/Select';

// Styled components
import { Container, Text } from './styles';

// Definitions
import { Props, Order } from './types';

// Constants
import { options } from './constants';

const Filter = (props: Props) => {
  // Props
  const { onChange, defaultValue = '' } = props;

  // Constants
  const defaultOption = options.find((option) => option.value === defaultValue);

  // Methods
  const onOrderChange = (option: Option) => {
    const order = option.value as Order;
    if (order) onChange?.(order);
  };

  return (
    <Container>
      <Icon id="icon-sort" name="sort" />
      <Text>Ordenar por:</Text>
      <Select
        id="select-order"
        name="select-order"
        className="select-order"
        defaultValue={defaultOption}
        options={options}
        onChange={onOrderChange}
      />
    </Container>
  );
};

export default Filter;
