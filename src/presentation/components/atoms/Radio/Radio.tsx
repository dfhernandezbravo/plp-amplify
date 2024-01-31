import { ChangeEvent } from 'react';

// Styled components
import { Container } from './styles';

// Definitions
import { Props } from './types';

const Radio = (props: Props) => {
  // Props
  const {
    id,
    name,
    value,
    label,
    checked,
    required,
    style,
    onChange,
    children,
  } = props;

  // Methods
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const current = event.target.value;
    onChange?.(current);
  };

  return (
    <Container>
      <label>
        <input
          id={id}
          type="radio"
          name={name}
          required={required}
          value={value}
          defaultChecked={checked}
          style={style}
          onChange={handleChange}
        />
        {label}
        {children}
      </label>
    </Container>
  );
};

export default Radio;
