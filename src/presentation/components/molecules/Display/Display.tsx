import { useState } from 'react';

// Components
import Icon from '@components/atoms/Icon';
import Radio from '@components/atoms/Radio';

// Styled components
import { Container, Text } from './styles';

// Definitions
import { Props, Layout } from './types';

const Display = (props: Props) => {
  // Props
  const { isShowText, onChange, defaultValue = 'grid' } = props;

  // State
  const [layout, setLayout] = useState<Layout>(defaultValue);

  // Methods
  const onRadioChange = (value: string) => {
    const current = value as Layout;
    setLayout(current);
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
        <Icon id="icon-grid" name={layout === 'grid' ? 'grid-red' : 'grid'} />
      </Radio>
      <Radio
        id="display-order-list"
        name="display-order"
        value="list"
        onChange={onRadioChange}
        checked={defaultValue === 'list'}
      >
        <Icon id="icon-list" name={layout === 'list' ? 'list-red' : 'list'} />
      </Radio>
    </Container>
  );
};

export default Display;
