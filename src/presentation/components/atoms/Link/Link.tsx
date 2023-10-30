// Definitions
import { Props } from './Link.defs';

// Styled component
import { LinkStyled } from './Link.style';

const CustomLink = (props: Props) => {
  // Props
  const { url, target = '_self', children } = props;

  return (
    <LinkStyled href={url} target={target}>
      {children}
    </LinkStyled>
  );
};

export default CustomLink;
