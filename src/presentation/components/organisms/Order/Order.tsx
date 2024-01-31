import Desktop from './modules/Desktop';
import Mobile from './modules/Mobile';
import { Container } from './styles';
import { Props } from './types';

const Order = (props: Props) => {
  const {
    isMobile,
    count,
    title,
    queryParams,
    isShowButtonBox,
    onChange,
    onDisplayChange,
    onFilterChange,
  } = props;

  return (
    <Container>
      {!isMobile && (
        <Desktop
          onChange={onChange}
          queryParams={queryParams}
          onDisplayChange={onDisplayChange}
          onFilterChange={onFilterChange}
        />
      )}
      {isMobile && (
        <Mobile
          count={count}
          title={title}
          onChange={onChange}
          isShowButtonBox={isShowButtonBox}
          queryParams={queryParams}
          onDisplayChange={onDisplayChange}
          onFilterChange={onFilterChange}
        />
      )}
    </Container>
  );
};

export default Order;
