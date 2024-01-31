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
    prefix = 'easy-select',
    className,
    required,
    options,
    searchable = false,
    clearable = false,
    defaultValue,
    onChange,
    onBlur,
    isMobile,
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
        classNamePrefix={prefix}
        isClearable={clearable}
        isSearchable={searchable}
        defaultValue={defaultValue}
        onChange={onChangeSelect}
        onBlur={onBlur}
        autoFocus={isMobile ? true : false}
        openMenuOnFocus={true}
        closeMenuOnSelect={true}
      />
    </Container>
  );
};

export default Select;
