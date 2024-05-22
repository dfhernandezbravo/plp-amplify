import {
  ChangeEvent,
  CSSProperties,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import {
  ToggleWrapper,
  Label,
  CheckboxStyled,
  ToggleStyled,
  TogglerStyled,
} from './styles';

// Definitions
export type ToggleProps = {
  name: string;
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
  defaultValue?: boolean;
  onChange?: (checked: boolean) => void;
  checked?: boolean;
  disabled?: boolean;
};

export const Toggle = ({
  name,
  children,
  style,
  className,
  defaultValue,
  onChange,
  disabled = false,
}: ToggleProps) => {
  const [checked, setChecked] = useState(defaultValue);

  useEffect(() => {
    setChecked(defaultValue);
  }, [defaultValue]);

  // Methods
  const handleOnChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
    onChange?.(event.target.checked);
  };

  return (
    <ToggleWrapper className={className} style={style}>
      <Label htmlFor={name}>{children}</Label>
      <ToggleStyled checked={!!checked} defaultChecked={defaultValue}>
        <CheckboxStyled
          disabled={disabled}
          id={name}
          name={name}
          type="checkbox"
          defaultChecked={defaultValue === undefined}
          onChange={handleOnChange}
        />
        <TogglerStyled checked={!!checked} />
      </ToggleStyled>
    </ToggleWrapper>
  );
};
