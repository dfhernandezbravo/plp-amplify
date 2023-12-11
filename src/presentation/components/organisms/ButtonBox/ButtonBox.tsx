// Components
import Icon from '@components/atoms/Icon';

// Styled components
import { Container, CustomButton } from './styles';

// Definitions
import { Props } from './types';

const ButtonBox = (props: Props) => {
  // Props
  const { onClick } = props;

  return (
    <Container>
      <CustomButton name="button-box-left" onClick={() => onClick('order')}>
        <Icon id="button-box-icon-order" name="sort" />
        Ordenar por
      </CustomButton>
      <CustomButton name="button-box-right" onClick={() => onClick('filter')}>
        <Icon id="button-box-icon-filter" name="filter" />
        Filtrar
      </CustomButton>
    </Container>
  );
};

export default ButtonBox;
