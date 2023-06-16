// Styled component
import ButtonStyle from './Button.style';
import { Props } from './Button.types';

// Default values
const Defaults = {
  variant: 'contained',
  loading: false,
  children: undefined,
};

export const Button = (props: Props) => {
  // Props
  const {
    onClick,
    type,
    variant,
    className,
    style,
    disabled,
    loading,
    children,
  } = props;

  return (
    <ButtonStyle
      type={type}
      className={className}
      variant={variant}
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {!loading && children}
      {loading && <p>Cargando...</p>}
    </ButtonStyle>
  );
};

Button.defaultProps = Defaults;
