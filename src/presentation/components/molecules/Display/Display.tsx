// Components
import Icon from '@components/atoms/Icon';
import Radio from '@components/atoms/Radio';

// Styled components
import { Container, Text } from './styles';

// Definitions
import { LayoutOptions, Props } from './types';

const Display = (props: Props) => {
  // Props
  const { isShowText, onChange, defaultValue = 'grid' } = props;

  // Methods
  const onRadioChange = (value: string) => {
    const current = value as LayoutOptions;
    onChange(current);
  };

  return (
    <Container>
      {isShowText && <Text>Ver en:</Text>}
      <Radio
        id="display-order-grid"
        name="display-order"
        value="grid"
        onChange={onRadioChange}
        checked={defaultValue === 'grid'}
      >
        <Icon
          id="icon-grid"
          name={defaultValue === 'grid' ? 'grid-red' : 'grid'}
        />
      </Radio>
      <Radio
        id="display-order-list"
        name="display-order"
        value="list"
        onChange={onRadioChange}
        checked={defaultValue === 'list'}
      >
        <Icon
          id="icon-list"
          name={defaultValue === 'list' ? 'list-red' : 'list'}
        />
      </Radio>
    </Container>
  );
};

export default Display;
