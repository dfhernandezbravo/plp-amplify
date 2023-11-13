// Components
import Mobile from './modules/Mobile';
import Desktop from './modules/Desktop';

// Styled components
import { Container } from './styles';

// Definitions
import { Props } from './types';

const Order = (props: Props) => {
  // Props
  const { isMobile, count, title, queryParams, isShowButtonBox, onChange } =
    props;

  return (
    <Container>
      {!isMobile && <Desktop onChange={onChange} queryParams={queryParams} />}
      {isMobile && (
        <Mobile
          count={count}
          title={title}
          onChange={onChange}
          isShowButtonBox={isShowButtonBox}
          queryParams={queryParams}
        />
      )}
    </Container>
  );
};

export default Order;
