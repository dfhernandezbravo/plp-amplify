import ReactSelect from 'react-select';

// Styled components
import { Container } from './styles';

// Definitions
import { Props, OnChangeReactSelect } from './types';

const Select = (props: Props) => {
  // Props
  const {
    id,
    name,
    label,
    className,
    required,
    options,
    defaultValue,
    onChange,
  } = props;

  // Methods
  const onChangeSelect: OnChangeReactSelect = (option) => {
    if (option) onChange?.(option);
  };

  return (
    <Container>
      {label && <label htmlFor={name}>{label}</label>}
      <ReactSelect
        id={id}
        instanceId={id}
        name={name}
        options={options}
        required={required}
        className={className}
        defaultValue={defaultValue}
        onChange={onChangeSelect}
      />
    </Container>
  );
};

export default Select;
