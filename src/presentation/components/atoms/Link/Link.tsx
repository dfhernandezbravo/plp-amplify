// Definitions
import { Props } from './types';

// Styled component
import { LinkStyled } from './styles';

const Link = (props: Props) => {
  // Props
  const { url, target = '_self', children } = props;

  return (
    <LinkStyled href={url} target={target}>
      {children}
    </LinkStyled>
  );
};

export default Link;
