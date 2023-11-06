import { useEffect, useState } from 'react';

// Components
import Desktop from './modules/Desktop';

// Styled components
import { Container } from './styles';

// Definitions
import { Props } from './types';

const Order = (props: Props) => {
  // Props
  const { mobile, defaultQueryParams, onChange } = props;

  // States
  const [key, setKey] = useState(0);

  // On change default query params
  useEffect(() => {
    setKey((prev) => ++prev);
  }, [defaultQueryParams]);

  return (
    <Container>
      {!mobile && (
        <Desktop
          key={key}
          defaultQueryParams={defaultQueryParams}
          onChange={onChange}
        />
      )}
    </Container>
  );
};

export default Order;
