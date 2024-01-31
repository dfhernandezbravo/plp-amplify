// Definitions
import { Props } from './types';

// Styled component
import { LinkStyled } from './styles';

const Link = (props: Props) => {
  // Props
  const { url, target = '_self', onClick, children } = props;

  return (
    <LinkStyled href={url} target={target} onClick={onClick}>
      {children}
    </LinkStyled>
  );
};

export default Link;
