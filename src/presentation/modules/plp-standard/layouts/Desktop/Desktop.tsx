// Styled components
import { Container } from './styles';

// Definitions
import { Props } from '../../types';

const Desktop = (props: Props) => {
  const { children } = props;

  return <Container>{children}</Container>;
};

export default Desktop;
