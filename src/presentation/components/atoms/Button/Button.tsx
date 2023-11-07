// Styled components
import { Container } from './styles';

// Definitions
import { Props } from './types';

const Button = (props: Props) => {
  // Props
  const { name, label, onClick, style, children } = props;

  return (
    <Container>
      {label && <label htmlFor={name}>{label}</label>}
      <Button name={name} style={style} onClick={onClick}>
        {children}
      </Button>
    </Container>
  );
};

export default Button;
