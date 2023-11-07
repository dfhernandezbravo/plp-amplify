import { useEffect, useState } from 'react';

// Components
import Mobile from './modules/Mobile';
import Desktop from './modules/Desktop';

// Styled components
import { Container } from './styles';

// Definitions
import { Props } from './types';

const Order = (props: Props) => {
  // Props
  const {
    isMobile,
    isShowButtonBox,
    count,
    title,
    defaultQueryParams,
    onChange,
  } = props;

  // States
  const [key, setKey] = useState(0);

  // On change default query params
  useEffect(() => {
    setKey((prev) => ++prev);
  }, [defaultQueryParams]);

  return (
    <Container>
      {!isMobile && (
        <Desktop
          key={key}
          onChange={onChange}
          defaultQueryParams={defaultQueryParams}
        />
      )}
      {isMobile && (
        <Mobile
          key={key}
          count={count}
          title={title}
          onChange={onChange}
          isShowButtonBox={isShowButtonBox}
          defaultQueryParams={defaultQueryParams}
        />
      )}
    </Container>
  );
};

export default Order;
