import { useEffect, useState } from 'react';

// Components
import Icon from '@components/atoms/Icon';
import Select, { Option } from '@components/atoms/Select';

// Styled components
import { Container, Text } from './styles';

// Definitions
import { Props, OrderOptions } from './types';

// Constants
import { options } from './constants';

const Filter = (props: Props) => {
  // Props
  const { onChange, defaultValue = '' } = props;

  // State
  const [key, setKey] = useState(0);
  const [currentOption, setCurrentOption] = useState<Option>();

  // Methods
  const onOrderChange = (option: Option) => {
    const order = option.value as OrderOptions;
    if (order) onChange?.(order);
    else onChange?.(null as unknown as OrderOptions);
  };
  const calculateDefaultOption = () => {
    const defaultOption = options.find(
      (option) => option.value === defaultValue,
    );
    if (defaultOption) {
      setCurrentOption(defaultOption);
      setKey((prev) => ++prev);
    }
  };

  // Effects
  useEffect(() => {
    calculateDefaultOption();
  }, [defaultValue]);

  return (
    <Container>
      <Icon id="icon-sort" name="sort" />
      <Text>Ordenar por:</Text>
      <Select
        key={key}
        id="select-order"
        name="select-order"
        className="select-order"
        options={options}
        onChange={onOrderChange}
        defaultValue={currentOption}
      />
    </Container>
  );
};

export default Filter;
