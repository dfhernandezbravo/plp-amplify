// Components
import HtmlText from '../../atoms/HtmlText';

// Styled components
import { Container, Title, Content } from './style';

// Definitions
import { Props } from './types';

const PromotionalText = (props: Props) => {
  // Props
  const { title, description } = props;
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <Content>
        <HtmlText>{description}</HtmlText>
      </Content>
    </Container>
  );
};

export default PromotionalText;
