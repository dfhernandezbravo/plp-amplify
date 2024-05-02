import Icon from '@components/atoms/Icon';
import Select, { Option } from '@components/atoms/Select';
import { useEffect, useState } from 'react';
import { options } from './constants';
import { Container, Text } from './styles';
import { OrderOptions, Props } from './types';
import { Layout } from '@components/atoms/layout';

const Filter = (props: Props) => {
  const { onChange, defaultValue = '', onBlur } = props;
  const [key, setKey] = useState(0);
  const [currentOption, setCurrentOption] = useState<Option>();

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

  useEffect(() => {
    calculateDefaultOption();
  }, [defaultValue]);

  return (
    <>
      <Layout is={['Desktop']}>
        <Container>
          <Icon id="icon-sort" name="sort" />
          <Text>Ordenar por:</Text>
          <div style={{ marginTop: '9px' }}>
            <Select
              key={key}
              options={options}
              onChange={onOrderChange}
              value={currentOption}
              height={40}
            />
          </div>
        </Container>
      </Layout>
      <Layout is={['Tablet', 'Phone']}>
        <Select
          key={key}
          options={options}
          onChange={onOrderChange}
          value={currentOption}
          customWidth={215}
          onBlur={onBlur}
          autoFocus={true}
          openMenuOnFocus={true}
          closeMenuOnSelect={true}
        />
      </Layout>
    </>
  );
};

export default Filter;
