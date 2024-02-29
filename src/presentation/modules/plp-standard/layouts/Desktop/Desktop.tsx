// Styled components
import { Container } from './styles';

// Definitions
import { Props } from '../../types';
import useDevice from '@hooks/use-device';

const PLPDesktop = (props: Props) => {
  const { children } = props;

  const { device } = useDevice();

  if (device !== 'Desktop') return null;

  return <Container>{children}</Container>;
};

export default PLPDesktop;
